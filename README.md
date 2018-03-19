# csc519-cm-test

Repository for our groups Test + Analysis Milestone

## Contributions

| Team Member   | Unity ID | Contribution   
| ------------- | ----------- | ------------ 
| Seth Butler      | scbutle2 |   Commit Fuzzer      
| Akshit Patel     | aapatel8 |   Automated Test Generation for Checkbox
| Kunal Kulkarni | krkulkar |    Commit Fuzzer
| Rezvan Mahdavi Hezaveh  |  rmahdav |   Automated Test Generation for Checkbox

## Coverage/Jenkins Support

## Automated Commit Generation - Commit Fuzzer

## Test prioritization analysis

## Automated Test Generation for Checkbox

We started by writing tests manually for routes in server.js to find the structure of tests. We used `supertest` to send request to API calls and `mongoose` to have access to database. We have created test data and save them in the database to run tests. We found there is 17 different test structures and called them `collectionsMock` in `testgenerator.js`.
Then we parsed route information from server.js using `esprima` and got information of 12 routes in it.
In `testgenerator.js` we have created 17 tests for each routes based on its parsed data and at last 204 Tests are created. We parsed information of 12 routes from server.js and used 17 possible test structures for each one. The coverage that we got is as follows:

You can see detailed coverage on screencast.

