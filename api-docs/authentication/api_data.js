define({ "api": [
  {
    "type": "get",
    "url": "/auth/authorize",
    "title": "RETRIEVE AN AUTHORIZATION GRANT",
    "name": "Authorize",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "response_type",
            "description": "<p>Authorization grant type requested. If you want to follow Authorization Code Flow, use code and if you want to use Implicit Flow, use token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The unique identifier of the client you received from registration.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>The URL you registered as the Callback URL during the client registration.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>A list of space-delimited scopes of the access request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.ts",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://api.developersworkspace.co.za/api/auth/authorize"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/github",
    "title": "AUTHENTICATE USING GITHUB",
    "name": "Github",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The unique identifier of the client you received from registration.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>The URL you registered as the Callback URL during the client registration.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.ts",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://api.developersworkspace.co.za/api/auth/github"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/github/callback",
    "title": "GITHUB CALLBACK",
    "name": "GithubCallback",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An authorization code, which can be used to obtain an access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>An opaque string value used to maintain state between the request and callback.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.ts",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://api.developersworkspace.co.za/api/auth/github/callback"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/google",
    "title": "AUTHENTICATE USING GOOGLE",
    "name": "Google",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The unique identifier of the client you received from registration.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>The URL you registered as the Callback URL during the client registration.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.ts",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://api.developersworkspace.co.za/api/auth/google"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/google/callback",
    "title": "GOOGLE CALLBACK",
    "name": "GoogleCallback",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Empty.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Empty.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.ts",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://api.developersworkspace.co.za/api/auth/google/callback"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/token",
    "title": "RETRIEVE AN ACCESS TOKEN",
    "name": "Token",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>A grant type. If you want to follow Authorization Code Flow then use authorization_code and if you want to use Resource Owner Password Credentials Flow, use password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The resource owner username. Required if grant_type is equal to password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The resource owner password. Required if grant_type is equal to password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The unique identifier of the client you received from registration.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web Token (JWT) (RFC 7519).</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "message",
            "description": "<p>Empty.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.ts",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://api.developersworkspace.co.za/api/auth/token"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/verify",
    "title": "VERIFY A JSON WEB TOKEN",
    "name": "Verify",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JSON Web Token (JWT) (RFC 7519).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>If valid token, returns true, otherwise false.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.ts",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://api.developersworkspace.co.za/api/auth/verify"
      }
    ]
  }
] });
