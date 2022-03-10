# Todos List

This repository in configured with JSON Server and JSON Server Auth to setup a fake API. It permits users signup, signin and, after authentication, register of todos in a todo list.

## Endpoints

The base URL described below will be used as a prefix for all endpoints of the API.

Base URL:

### User Signup

**`POST /signup`**

The method POST in the /signup endpoint will register an user on the API data base, permiting later signin and interactions with the API features.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /singup
//URI e.g.: /singup
//Body(JSON):

    {
        "name": "Test User", //required
        "age": "27", //optional
        "gender": "Male", //optional
        "email": "testuser@email.com", //required
        "password": "197328@#TesteUser" //required
    }
```

**Response Format:**

```JSON
//Status: 201 Created
//Body(JSON):

    {
        "accessToken": "xxx.xxx.xxx",
        "user": {
                "id": 1,
                "email": "testuser@email.com"
            }
    }
```

### User Signin

**`POST /signin`**

The method POST in the /signin endpoint will login an user on the API, it's response will contain a JWT token wich should be used to interact with the authenticated routes.

**Requisition Format:**

```JSON
//Method: POST
//Endpoint: /signin
//URI e.g.: /signin
//Body(JSON):

    {
        "email": "testuser@email.com", //required
        "password": "197328@#TesteUser" //required
    }
```

**Response Format:**

```JSON
//Status: 200 OK
//Body(JSON):
{
  "accessToken": "xxx.xxx.xxx",
  "user": {
    "id": 1,
    "name": "Test User",
    "age": "27", //optional
    "gender": "Male", //optional
    "email": "testuser@email.com",
  }
}
```

#### JWT payload

The access token has the following claims:

sub : the user id (as per the [JWT specs](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.2)).  
email : the user email.
