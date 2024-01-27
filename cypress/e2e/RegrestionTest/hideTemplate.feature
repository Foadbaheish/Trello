@Qa-Training
Feature: Verify If the user can Hide Template From List Successfully

R_6 :
#User Can Hide Template From List

@Tc-7 @Regression-Test 
Scenario: verify If User Can Hide Template From List
Given The user navigate to board on wepsite
When The user click right Click on card
And The user click on hide from list
Then The template should be hide successfully