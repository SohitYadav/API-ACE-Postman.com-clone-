// requestTabs onclick function

let noneBtn = document.querySelector("#noneBtn");
let jsonBtn = document.querySelector("#jsonBtn");
let headersBtn = document.querySelector("#headersBtn");
let sp1 = document.getElementById("span1");
let sp2 = document.getElementById("span2");
let sp3 = document.getElementById("span3");

let reqDataDiv = document.querySelector("#reqData");

// value of JSON and headers to show and store data.

let lastURl = localStorage.getItem("url") || null;
if (lastURl != null) {
  let urlAndMethodForm = document.querySelector("#urlAndMethodForm");
  urlAndMethodForm.apiSearch.value = lastURl;
}

let keyValueObj = localStorage.getItem("keyValueObj") || {};
if (Object.keys(keyValueObj).length != 0) {
  keyValueObj = JSON.parse(keyValueObj);
}
let jsonData = localStorage.getItem("jsonData") || [];
if (jsonData.length != 0) {
  console.log(jsonData);
  jsonData = JSON.parse(jsonData);
}

// ****************************************************None section****************************************************************
function initialNoneBtnColor() {
  // noneBtn.style.backgroundColor = "orange";
  noneBtn.style.color = "#fb9820";
  sp1.style.border = "1px #fb9820 solid";
  reqDataDiv.style.backgroundColor = "#fff";
  // noneBtn.style.padding = "5px";
}

initialNoneBtnColor();
noneBtn.addEventListener("click", () => {
  // style
  reqDataDiv.innerHTML = null;
  reqDataDiv.style.backgroundColor = "#fff";
  // noneBtn.style.backgroundColor = "orange";
  noneBtn.style.color = "#fb9820";
  sp1.style.border = "1px #fb9820 solid";

  jsonBtn.style.backgroundColor = "white";
  headersBtn.style.backgroundColor = "white";

  jsonBtn.style.color = "black";
  headersBtn.style.color = "black";

  sp2.style.border = "0px";
  sp3.style.border = "0px";
  // adding content
  reqDataDiv.innerHTML = `<p style="text-align: center">This request doesn't have a body</p>`;
});

// ****************************************************Headers section****************************************************************
headersBtn.addEventListener("click", () => {
  // style
  // reqDataDiv.innerHTML = null;
  // headersBtn.style.backgroundColor = "orange";
  headersBtn.style.color = "#fb9820";
  sp2.style.border = "1px #fb9820 solid";
  sp2.style.width = "70px";
  reqDataDiv.style.backgroundColor = "#fff";

  jsonBtn.style.backgroundColor = "white";
  noneBtn.style.backgroundColor = "white";

  jsonBtn.style.color = "black";
  noneBtn.style.color = "black";

  sp1.style.border = "0px";
  sp3.style.border = "0px";

  // content
  let HeadersTR = null;
  if (Object.keys(keyValueObj).length === 0) {
    HeadersTR = `<tr>
                <td contenteditable="true" data-text="Key"></td>
                <td contenteditable="true" data-text="Value"></td>
                <td contenteditable="true" data-text="Discription"></td>
                <td>
                  <i class="fa fa-trash-o rowDelete" aria-hidden="true"></i>
                </td>
              </tr>`;
  } else {
    for (key in keyValueObj) {
      HeadersTR += `<tr>
                <td contenteditable="true" data-text=${key}></td>
                <td contenteditable="true" data-text=${keyValueObj[key]}></td>
                <td contenteditable="true" data-text="Discription"></td>
                <td>
                  <i class="fa fa-trash-o rowDelete" aria-hidden="true"></i>
                </td>
              </tr>`;
    }
  }
  reqDataDiv.innerHTML = `<table id="headersTable">
              <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Discription</th>
                <th data-attr-ignore></th>
              </tr>
              ${HeadersTR}
              <!-- hide -->
              <tr class="hide">
                <td contenteditable="true" data-text="Key"></td>
                <td contenteditable="true" data-text="Value"></td>
                <td contenteditable="true" data-text="Discription"></td>
                <td>
                  <i class="fa fa-trash-o rowDelete" aria-hidden="true"></i>
                </td>
              </tr>
            </table>
            <div id="insertRowDiv">
              <i id="insertRowBtn" class="fa fa-plus"></i>
            </div>`;
  headersTableFunc();
});

// headers click function, insertRow on click and deleting row
function headersTableFunc() {
  var $reqData = $("#reqData");
  $("#insertRowBtn").click(function () {
    var $clone = $reqData.find("tr.hide").clone(true).removeClass("hide");
    $reqData.find("table").append($clone);
  });

  $(".rowDelete").click(function () {
    $(this).parents("tr").detach();
  });
}

// ****************************************************Json section****************************************************************
jsonBtn.addEventListener("click", () => {
  // jsonBtn.style.backgroundColor = "orange";
  jsonBtn.style.color = "#fb9820";
  sp3.style.border = "1px #fb9820 solid";
  reqDataDiv.style.backgroundColor = "#282a3a";

  headersBtn.style.backgroundColor = "white";

  noneBtn.style.backgroundColor = "white";

  noneBtn.style.color = "black";

  headersBtn.style.color = "black";
  sp1.style.border = "0px";
  sp2.style.border = "0px";

  // e.preventDefault();
  reqDataDiv.innerHTML = null;
  reqDataDiv.innerHTML = `<div class="editor">
  <div class="line-numbers">
      <span></span>
  </div>
  <textarea id="requestBody"></textarea>
</div>`;
  const textarea = document.querySelector("textarea");
  textarea.innerHTML = jsonData;
  const lineNumbers = document.querySelector(".line-numbers");

  textarea.addEventListener("keyup", (event) => {
    const numberOfLines = event.target.value.split("\n").length;

    lineNumbers.innerHTML = Array(numberOfLines).fill("<span></span>").join("");
  });

  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      textarea.value =
        textarea.value.substring(0, start) +
        "\t" +
        textarea.value.substring(end);

      event.preventDefault();
    }
  });
});

// ***************************on click event for send btn to get the data of headers,json,text, etc******************************************
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;
let sendBtn = document.querySelector("#sendBtn");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // ********************** Data from url And Method Form **********************************
  let urlAndMethodForm = document.querySelector("#urlAndMethodForm");
  let method = urlAndMethodForm.methods.value;
  let url = urlAndMethodForm.apiSearch.value;

  // let time = Date.now() - performance.now()

  // *********************getting data from reqData section**********************************

  // **************************getting data from headers*************************************
  var $reqData = $("#reqData");
  var $rows = $reqData.find("tr:not(:hidden)");
  var keys = [];
  var headersData = [];
  $($rows.shift())
    .find("th:not(:empty):not([data-attr-ignore])")
    .each(function () {
      keys.push($(this).text().toLowerCase());
    });
  $rows.each(function () {
    var $td = $(this).find("td");
    var h = {};
    console.log($td);
    keys.forEach(function (header, i) {
      h[header] = $td.eq(i).text();
    });

    headersData.push(h);
  });
  if (headersData.length > 0) {
    headersData.forEach((elem) => {
      if (elem["key"] != "") {
        keyValueObj[elem["key"]] = elem["value"];
      }
    });
    console.log(keyValueObj);
  }

  // ******************************getting data from JSON********************************
  if (document.getElementById("requestBody") != null) {
    jsonData = document.getElementById("requestBody").value;

    function isJson(jsonData) {
      try {
        JSON.parse(jsonData);
        return true;
      } catch (e) {
        return false;
      }
    }

    if (isJson(jsonData) === false) {
      alert("Invalid body type or Invalid JSON type ❌");
    }

    jsonData = JSON.parse(document.getElementById("requestBody").value);

    if (typeof jsonData !== "object" || Array.isArray(jsonData)) {
      jsonData = [];
      alert("Invalid body type or Invalid JSON type ❌");
    } else {
      jsonData = `${document.getElementById("requestBody").value}`;
      console.log(jsonData);
    }
  }

  // sending data to crud function
  if (url == "") {
    alert("please provide URL");
  } else {
    crudFunction(method, url);
  }
});

// crud operations

async function crudFunction(method, url) {
  console.log(method, url, jsonData, keyValueObj);
  localStorage.setItem("jsonData", JSON.stringify(jsonData));
  localStorage.setItem("url", url);
  localStorage.setItem("keyValueObj", JSON.stringify(keyValueObj));
  // seting headers data

  let headers = { "Content-Type": "application/json" };
  if (Object.keys(keyValueObj).length != 0) {
    for (key in keyValueObj) {
      headers[key] = keyValueObj[key].toString();
    }
  }

  // getting body data

  let body = {};
  let outputData;
  let status;
  let timeTaken;
  let fetchURL;
  let startTime = performance.now();
  if (method == "GET") {
    try {
      fetchURL = await fetch(url, {
        method: method,
        headers: headers,
      });
    } catch (error) {
      outputData = "cannot get the request. Server Error";
      status = 500;
    }

    // getting output data

    if (fetchURL != undefined) {
      outputData = await fetchURL.headers.get("content-type").split(";");
      console.log(await fetchURL.headers.get("content-type").split(";"));
      if (outputData[0] == "text/html") {
        status = fetchURL.status;
        outputData = await fetchURL.text();
      } else {
        status = fetchURL.status;
        outputData = await fetchURL.json();
      }
    }
  } else {
    try {
      fetchURL = await fetch(url, {
        method: method,
        headers: headers,
        body: jsonData,
      });
    } catch (error) {
      outputData = `cannot ${method} the request. Server Error`;
      status = 500;
    }
    // getting output data

    if (fetchURL != undefined) {
      outputData = await fetchURL.headers.get("content-type").split(";");
      console.log(await fetchURL.headers.get("content-type").split(";"));
      if (outputData[0] == "text/html") {
        status = fetchURL.status;
        outputData = await fetchURL.text();
      } else {
        status = fetchURL.status;
        outputData = await fetchURL.json();
      }
    }
  }
  let endTime = performance.now();
  timeTaken = endTime - startTime;
  timeTaken = Math.trunc(timeTaken);
  let dataSize = new Blob([await fetchURL]).size;
  console.log(outputData, status);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ response-box-logic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  let responseBox = document.getElementById("response");
  let statusOnDom = document.getElementById("status");
  let timeOnDom = document.getElementById("time");
  let sizeOfData = document.getElementById("size");

  let x = status.toString();
  if (x[0] == 2) {
    statusOnDom.style.color = "green";
  } else if (x[0] == 3) {
    statusOnDom.style.color = "yellow";
  } else {
    statusOnDom.style.color = "red";
  }

  statusOnDom.innerHTML = null;
  responseBox.innerHTML = null;
  timeOnDom.innerHTML = null;
  sizeOfData.innerHTML = null;

  sizeOfData.innerHTML = `${dataSize}B`;
  timeOnDom.innerHTML = `${timeTaken}ms`;
  statusOnDom.innerHTML = JSON.stringify(status);
  responseBox.innerHTML = `<p>${JSON.stringify(outputData)}</p>`;
  fetchURL = undefined;
}
