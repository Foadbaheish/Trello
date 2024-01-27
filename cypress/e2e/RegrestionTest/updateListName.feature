@Qa-Training
Feature: Verify If the user can Update Lists Names Successfully

R_1 : 
#User Can Update List Name ( update the name of the defaultlists (3 Lists) that appear on the board “TO DO” , … ) , don’tcreate any new list .

@Tc-2 @Regression-Test  
Scenario: verify If User Can Update Lists Names
Given The user navigate to board on wepsite
When The user click on To Do list title to update it
And The user click on Doing list title to update it
And The user click on Done list title to update it
Then The lists titles should be changed successfully