# CypressTests-automationexercise.com-project

This project contains an automated test, coded in Cypress. The test object is automationexercise.com. In this particular test I checked the accessibility of the login panel and ability to log in. In this project, I used conditional tests to create two test case scenarios that might occur during the login process.

If you want to open the project, you need to follow this steps:
* clone repository 
* use command in terminal: npm install
* use command in terminal: npx cypress open

There are two scenarios for this test:
* In the first scenario both tests should pass.
* In the second scenario you need to change for example one letter in 48 line of code ('a[href="/logout"]' change to 'a[href="/logou"]') and then you will get the situation when the first test will pass and the second will fail, because the User did not logged in.
