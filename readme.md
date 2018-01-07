# review backend

# HTTP endpoint
## CRUD json (user)  
Description: Using fs.readfile read and write json  
Endpoint: /user  

| Endpoint   | HTTP    | Require         | Description |
| ---------- | ------  | --------------- | ------          |
| /v         | GET     | -               | get API version |
| /          | POST    | {json}          | add new user |
| /          | GET     | -               | get all users |
| /:id       | GET     | params          | get specific user |
| /:id       | PUT     | params, {json}  | edit specific user |
| /:id       | DELETE  | params          | delete specific user |

## CRUD sqlite3 (plane)
Description: Using sqlite3 for CRUD plane database  
note: run config.js  
Endpoint: /plane  

| Endpoint | HTTP | Require | Desc |
|----------|------|---------|------|
| /v       | GET  | -       | get API version |
| /        | POST | {json}  | add new plane |
| /        | GET  | -       | get all planes |
| /:id     | GET  | params  | get specific plane |
| /:id     | PUT  | params, {json}  | edit specific plane |
| /:id     | DELETE  | params  | delete specific plane |

## CRUD postgres (rocket)
Description: Using postgres for CRUD rocket database  
note: sequelize init & edit config postgres  
Endpoint: /rocket  

| Endpoint | HTTP | Require | Desc |
|----------|------|---------|------|
| /v       | GET  | -       | get API version |
| /        | POST | {json}  | add new rocket |
| /        | GET  | -       | get all rockets |
| /:id     | GET  | params  | get specific rocket |
| /:id     | PUT  | params, {json}  | edit specific rocket |
| /:id     | DELETE  | params  | delete specific rocket |

## CRUD mongodb (spaceship)
Description: Using mongodb for CRUD spaceship database  
Endpoint: /spaceship  

| Endpoint | HTTP | Require | Desc |
|----------|------|---------|------|
| /v       | GET  | -       | get API version |
| /        | POST | {json}  | add new spaceship |
| /        | GET  | -       | get all spaceships |
| /:id     | GET  | params  | get specific spaceship |
| /:id     | PUT  | params, {json}  | edit specific spaceship |
| /:id     | DELETE  | params  | delete specific spaceship |

## CRUD redis (spacehouse)
Description: Using redis for CRUD spacehouse database    
Endpoint: /spacehouse  

| Endpoint | HTTP | Require | Desc |
|----------|------|---------|------|
| /v       | GET  | -       | get API version |
| /        | POST | {json}  | add new spacehouse |
| /        | GET  | -       | get all spacehouses |
| /:id     | GET  | params  | get specific spacehouse |
| /:id     | PUT  | params, {json}  | edit specific spacehouse |
| /:id     | DELETE  | params  | delete specific spacehouse |
