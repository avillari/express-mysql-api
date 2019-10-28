# Express-MySQL REST API
This is a basic REST API using ExpressJS to handle server side requests/routes and MySQL as the database.

The database is simple and consists of one table called "Employees" in which users can retrieve all employees in the database, retreive one employee in the database based on an Employee ID, or create a new Employee in the database.

## API Endpoints

###### GET /api/getEmployees
This endpoint retrieves all the employees that are currently stored in the database in JSON format. Example output for this request is as follows:
```
{
    "success": true,
    "employees": [
        {
            "id": 2,
            "name": "Jay",
            "location": "India"
        },
        {
            "id": 3,
            "name": "Jade",
            "location": "Germany"
        },
        {
            "id": 4,
            "name": "Lesley",
            "location": "Scotland"
        }
    ]
}
```

###### GET /api/getEmployee/id
This endpoint retrieves a single employee in the database based on the id provided. For example, hitting the endpoint `/api/getEmployee/4` would return:
```
{
    "success": true,
    "person": [
        {
            "id": 4,
            "name": "Lesley",
            "location": "Scotland"
        }
    ]
}
```

###### POST /api/addEmployee
This endpoint takes in a request body as an employee object with a 'name' and 'location' field and adds this employee into the database.

Example request body:
```
{
	"name": "Andy",
	"location": "Australia"
}
```

Will return the following response with the newly created employee ID if successful:
```
{
    "success": true,
    "message": "Employee added: 15"
}
```

## Project Setup

Before running the server, the database must be set up and properly configured.

1. Ensure you have MySQL installed and create a new database for this project:
```
CREATE DATABASE REST-API-DB;
USE REST-API-DB;
```
2. Create a new user for database use with a password of your choice and grant privileges
```
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
```
3. Create an employees table and insert some dummy data:
```
CREATE TABLE employees (
 id int(11) NOT NULL AUTO_INCREMENT,
 name varchar(50),
 location varchar(50),
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO employees (id, name, location) VALUES
(1, 'Bob', 'Australia'),
(2, 'Jay', 'India'),
(3, 'Jade', 'Germany'),
(4, 'Lesley', 'Scotland');
```
4. Open the config.js file in the database folder and edit the fields according to the previous steps:
```
module.exports = {
    host:'localhost',
    user:'CREATED USER HERE',
    password:'PASSWORD FOR USER HERE',
    database:'DATABASE NAME HERE'
}
```

5. That's it! Clone the repo and run **npm install** and **npm start** and you should be good to go.

### Todo List
- [x] Create database
- [x] Create basic endpoints
    - Get all employees
    - Get single employee
    - Create new employee
- [ ] Create front end UI that allows users to get/add employees (React or Vanilla JS)
