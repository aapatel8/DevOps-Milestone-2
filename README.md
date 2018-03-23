# csc519-cm-test

Repository for our groups Test + Analysis Milestone

## Contributions

| Team Member   | Unity ID | Contribution   
| ------------- | ----------- | ------------ 
| Seth Butler      | scbutle2 |   Commit Fuzzer      
| Akshit Patel     | aapatel8 |   Automated Test Generation for Checkbox, Test prioritization analysis
| Kunal Kulkarni | krkulkar |    Commit Fuzzer, Test prioritization analysis
| Rezvan Mahdavi Hezaveh  |  rmahdav |   Automated Test Generation for Checkbox

## Coverage/Jenkins Support

## Automated Commit Generation - Commit Fuzzer
Our fuzzer mostly focused on manipulation of binary and logical expressions such as AND, OR, and NOT. This was mostly due to the requirement of performing whitebox fuzzing. Random manipulations and alterations of files were not acceptable as the application was still expected to compile in order to successfully run iTrust's test suite. The majority of the errors that we discovered involved illegal state. This makes sense considering that the majority of our fuzzing operations involved altering control flow. This alterations forced the application to reach branches that it would not have if normal flow control checks were in place. In order to make the fuzzer more robust we could begin exploring deeper into Java's grammer in attempts to verify that exceptions, such as NullPointerExceptions, are properly handled. Our fuzzer could also be further developed along side coverage analysis of the program to provide obscure test cases and allow reaching of rarely traversed branches / code statements.

## Test prioritization analysis
We followed the class workshop titled "Test Suites", and extended it for this milestone. We iterated 100 times, one per build and checked the surefire-report xml file generated for every build. For every test case, we calculated the cumulative time required for each test case to execute across 100 builds. We also calculated the failure count for each test case. The test cases which failed the most are placed at the beginning after sorting. As for the test cases with 0 failure count (or equal failure counts), they are sorted in increasing order of the time required for them to execute across 100 builds. We believe that the most frequently failing test cases result from the cases covering components of the application that depend heavily on state, and/or that have to perform many checks to validate input and state is as expected before proceeding.

## Automated Test Generation for Checkbox

We started by writing tests manually for routes in server.js to find the structure of tests. We used `supertest` to send request to API calls and `mongoose` to have access to database. We have created test data and save them in the database to run tests. We created two Schemas: StudySchema and VoteSchema. We also created two models: StudyModel and VoteModel. We found there is 17 different test structures and called them `collectionsMock` in `testgenerator.js`. The main difference of them is their used collections, passed information to API and passed objects to API.

Then we parsed route information from server.js using `esprima` and got information of 12 routes in it. The information that we have got are action (get or post), path (like /api/study/load/:id) and route (like study.loadStudy).

In `testgenerator.js` we have created 17 tests for each routes based on its parsed data and at last 204 Tests are created. We parsed information of 12 routes from server.js and used 17 possible test structures for each one. The coverage that we got is as follows:

<img width="1343" alt="screen shot 2018-03-22 at 9 21 02 pm" src="https://media.github.ncsu.edu/user/8135/files/d0c875da-2e17-11e8-9d6f-21984e90c084">

You can see detailed coverage screenshots here[https://github.ncsu.edu/scbutle2/csc519-cm-test/tree/master/checkbox.io/checkboxScreenshots] and on screencast.

