@Qa-Training
Feature: Verify If the User Can Move Template To Any List Successfully

R_5 :
#User Can Move Template To Any List

@Tc-6 @Regression-Test 
Scenario: verify If User Can Move Template To Any List
Given The user navigate to board on wepsite
When The user click on template
And The user click on move button
And The user select the Doing list to move for it
And The user click on move button To save
And The user click on move button agine
And The user select the Done list to move for it
And The user click on move button To save agine
Then The template should be moved successfully