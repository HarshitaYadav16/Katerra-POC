define({ "api": [
  {
    "type": "get",
    "url": "/getUsers",
    "title": "Request all users information",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>User name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed password of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error Auth failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Registration of new user",
    "name": "Register",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JWT",
            "description": "<p>of the registered user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request Error All fields are required to be filled by the user Auth failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/updateUser/:id",
    "title": "Update User information",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updates",
            "description": "<p>user_name User name of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error Auth failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/deleteUser/:id",
    "title": "Update User information",
    "name": "deleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delete",
            "description": "<p>user_name User name of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error Auth failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/getUserById/:id",
    "title": "Request User information",
    "name": "getUserById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>User name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed password of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error Auth failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "User"
  }
] });
