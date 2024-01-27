@Qa-Training
Feature: Verify If The User Can Delete Existing Successfully

R_2 :
#User Can Delete Existing Card

@Tc-3 @Regression-Test 
Scenario: verify If User Can Delete Existing Card
Given The user navigate to board on wepsite
When The user click on menu
And The user click on Archive button
And The user click on delete button
And The user click confirm delete button
Then The card should be deleted successfully