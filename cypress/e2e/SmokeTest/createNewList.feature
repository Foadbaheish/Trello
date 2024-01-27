@Qa-Training
Feature: Verify If the user can Create A New List Successfully

R_0 :
# User Can Create A New List

@Tc-1 @smoke 
Scenario: verify If User Can Create A New List
Given The user navigate to board on wepsite
When The user click on add another list button
And The user enter list title
And The user click on add list button
Then The list should be created successfully














