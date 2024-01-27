@Qa-Training
Feature: Verify If the user can UpDate Name Of Template Successfully

R_4 :
#User Can Update Name Of Template

@Tc-5 @Regression-Test 
Scenario: verify If User Can Create New Template 
Given The user navigate to board on wepsite
When The user click on template card
And The user click on template name
And The user enter the new template name
Then The template name should be update successfully