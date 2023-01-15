# CypressTests-automationexercise.com-project

This project contains an automated test, coded in Cypress. The test object is automationexercise.com. In this particular test I checked the accessibility of the login panel and ability to log in. In this project, I used conditional tests to create two test case scenarios that might occur during the login process.

If you want to open the project, you need to follow this steps:
* clone repository 
* use command in terminal: npm install
* use command in terminal: npx cypress open

There are two scenarios for this test:
* In the first scenario both tests should pass.
* In the second scenario if Cypress does not find the logout button, the first test should pass and the second should fail - this situation means that User is not logged in.
