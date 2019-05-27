## Todo App

#### Setup

- Install mongodb. In root folder run yarn.

- Rename env-sample to .env 

- run `yarn start` or `npm start`
    
#### Endpoints

| Functionality        |    Method     |         Endpoint   |
| :------------------- |:-------------:| ------------------:|
| Get all todos        | GET           | /api/v1/todo       |
| Add a todo           | POST          | /api/v1/todo       |
| Edit todo            | PUT           | /api/v1/todo       |
| Delete todo          | DELETE        | /api/v1/todo       |

#### Request data

- POST - `{
"name": "string',
"note": "string"
}`

- PUT/DELETE - 
`{
"name": "string',
"note": "string"
"id": "valid mongoId"
}`



