## RESTFUL APIs For TODO APP

## how to run file

1.Download zip file<br/>
2.Extract zip file in your sytem<br/>
3.Open file in VS code<br/>
4.Open terminal in Vs code<br/>
5.Run command npm i<br/>
6.Run command npm start<br/>

## How to call API

Open PostMan Application Or Thunder Client Extension in VSCode and try running these commands:<br/>
1.For Creating or Register a user use:- http://localhost:8080/api/users/register method: 'POST' , here you have to give body in json as example.<br/>
{
"username":"mark"<br/>
"email":"mark@gmail.com",<br/>
"password":"mark123",<br/>
"role":"admin" or "user"<br/>
}<br/>

2.For Login the user http://localhost:8080/api/users/login method: 'POST' , here you have to give body in json as example. <br/>
{
"email":"mark@gmail.com",<br/>
"password":"mark123"<br/>
}<br/>
After successful login you will get the token. This token is used to allow the authorized user to perfrom the CRUD operation. Only the authorized user can create,read,update and delete their own todos. For this ,we create a validtokenHandler middleware for checking authentication.<br/>

3.For Creating todos to particular user use http://localhost:8080/api/todos/ method: 'POST', here you have to give the token (received after login ) in the Auth column in the bearer section paste the same token and give the body as json to create todo.<br/>
{
"title":"Test",<br/>
"description":"FURATION BACKEND TEST",<br/>
"status":"completed" or "pending"<br/>
}<br/>
You can create as many as todo u want.<br/>

4.For Updating todos use http://localhost:8080/api/todos/:id method: 'PUT', here you have to give \_id of that particular todo. Only the owner can update their own todos.<br/>

5.For Deleting todos use http://localhost:8080/api/todos/:id method: 'DELETE', here you have to give \_id of that particular todo. Only the owner can delete their own todos.<br/>

6.For Getting todos use http://localhost:8080/api/todos/ method: 'GET', will get all the todos created by the current user.<br/>

7.For Getting particular todos use http://localhost:8080/api/todos/:id method: 'GET', here you have to give \_id of that particular todo and will get particular todo created by the current user.<br/>

8.In this we use 'express-async-handler' and also create errorHandler middleware for error handling.<br/>

9.In this we use 'brypt' library to encrypt the password and saves the hashed password. To Install type --> npm i bcrypt.<br/>

10.In this we use 'jsonwebtoken' library to generate the json webtoken for authentication. To Install type -> npm i jsonwebtoken.<br/>

11.In this we use "nodemon" library to restart the server automatically after each and every changes that we have made in the code base. To Install type -> npm i nodemon.<br/>
And add a script go to the package.json file and in the "scripts" key add "start": "nodemon index.js" and start the server by typing on terminal-> npm start.<br/>
