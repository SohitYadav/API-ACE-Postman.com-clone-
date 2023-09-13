
# API-ACE

# Introducing API-ACE  (Clone of Postman.com)
- Deployed WebSite Link = https://apiwizard.netlify.app
- Deployed Backend URL  = https://elegant-moth-zipper.cyclic.app


![API-ACELOGO](https://github.com/Nish-026/APIwizard/assets/115637679/819e8ef2-0d38-449d-bed9-7fe06267463e)

The API ACE is the foundational tool of Postman, and it enables you to easily explore, debug, and test your APIs while also enabling you to define complex API requests for HTTP, REST, SOAP, GraphQL, and WebSockets.The API client automatically detects the language of the response, links, and format text inside the body to make inspection easy.Through the API client, you can organize requests into Postman Collections to help you organize your requests for reuse so you don't waste time building everything from scratch.


# Features :-

- Interactive UI/UX for best customer experiene
- Google and Github Auth Login and Signup
- Welcome message on their signup
- User perform all the API Crud operations
- User can save their session in the workspace
- Transitions & Animations

---

# Tech Stack Used: -

## Frontend

| HTML                                                                                                                           | CSS                                                                                                                            | JavaScript                                                                                                                     | BootStrap                                                                                                                      |                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| <img width="75px" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"> | <img width="75px" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"> | <img width="70px" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"> | <img width="75px" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"> |

## Backend : -

| Node.js                                                                                                                         | Express.js                                                                                                                      | MongoDB                                                                                                       | Passport                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/229164589-4e724000-542d-4deb-9e11-cca7739c2b01.png"> | <img width="75px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/233825866-91f342c0-f567-4f9f-af03-e9acc86a784d.png"> |

---

# Routes :-
- ### Users Routes

| METHOD | ENDPOINT        | WHAT IT DOES                                                                          |
| ------ | --------------- | ------------------------------------------------------------------------------------- |
| POST   | /user/signup    | -> Register New User (Requires user details in req.body)                              |
| POST   | /user/login     | -> Login existing user (Requires email and passwords, returns token if login success) |

- ### API Routes

| METHOD | ENDPOINT              | WHAT IT DOES                                                         |
| ------ | ------------------    | -------------------------------------------------------------------- |
| GET    | /Api/getUserApi/:id   | -> Getting All the saved APIs of the User (using userID)             |
| POST   | /Api/saveUserApi      | -> For saving the session in the workspace                           |
| DELETE | /Api/delete/:id       | -> Deleting an Api by ID from the workspace                          |


- ### Google Routes

| METHOD | ENDPOINT         | WHAT IT DOES                                     |
| ------ | ---------------- | ------------------------------------------------ |
| GET    | /google          | -> Initiating Google Auth                        |
| GET    | /google/callback | -> Redirect URL                                  |
| GET    | /google/failure  | -> For handling the failure                      |
| GET    | /github          | -> Initiating Github Auth                        |
| GET    | /github/callback | -> Redirect URL                                  |
| GET    | /github/failure  | -> For handling the failure                      |

# Here are some screenshots of website :-

### 🔶: Home Page :-

## <img width="958" alt="Screenshot 2023-05-15 125223" src="https://github.com/Nish-026/APIwizard/assets/115637679/9d8beebe-93e7-4fd7-b171-017add3cace1">

   <img width="960" alt="Screenshot 2023-05-15 125255" src="https://github.com/Nish-026/APIwizard/assets/115637679/35298028-e08c-41b5-b50c-6991f51a1704">

### 🔶: Sign Up Page :-
## <img width="956" alt="Screenshot 2023-05-15 130605" src="https://github.com/Nish-026/APIwizard/assets/115637679/97217746-cf6f-42e1-9f7e-7bf6f92a1316">

### 🔶: Login Page :-
## <img width="958" alt="Screenshot 2023-05-15 130750" src="https://github.com/Nish-026/APIwizard/assets/115637679/02438536-740f-4090-a73a-3b0922f137b4">

### 🔶: Workspace :-
## <img width="959" alt="Screenshot 2023-05-15 130956" src="https://github.com/Nish-026/APIwizard/assets/115637679/e68da6a7-aa9d-43d3-ba51-efc8d8177d37">

### 🔶: Main Working page :-
## <img width="945" alt="Screenshot 2023-05-15 131151" src="https://github.com/Nish-026/APIwizard/assets/115637679/a385ab85-be65-4802-945e-145d841f5006">
