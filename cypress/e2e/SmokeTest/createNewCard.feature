@Qa-Training
Feature: Create New Card on Trello Wepsite Successfully
The user can create new card successfully
  @Tc-1 @smoke
  Scenario: verify If We Can Create A New Card 
  Given The user navigate to board on Trello
  When The user click on add card button
  And Enter the name of card to add new card
  And Click on add card button
  Then The Card should be created successfully
