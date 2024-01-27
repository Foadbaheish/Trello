@Qa-Training
Feature: Verify If the user can Create A New Template Successfully

R_3 :
#User Can Create New Template “Card Template”

@Tc-4 @smoke
Scenario: verify If User Can Create New Template 
Given The user navigate to board on wepsite
When The user click on create template icon
And The user click on create a new template button
And The user enter the template title
And The user click on add button
Then The template should be created successfully