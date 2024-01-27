/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import createNewCardActions from "../../../PageOpjects/createNewCard/actions.cy";
import sharedDataUtils from "../../../PageOpjects/shared/dataUtils.cy"
import sharedActions from "../../../PageOpjects/shared/actions.cy";
import createNewCardAssertions from "../../../PageOpjects/createNewCard/assertions.cy";
import { BoardName,ListName,CardName,TOKEN,APIKEY } from "../../../support/constans.cy";
const createNewCardAction = new createNewCardActions();
const createNewCardAssertion = new createNewCardAssertions();
const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
let boardUrl,boardId;

before({tags:"@Tc-1 and @smoke"},()=>{
  /* cy.request("POST",`https://api.trello.com/1/boards/?name=${BoardName}&key=${APIKEY}&token=${TOKEN}`).then((res)=>{
      cy.log(res.status);
      cy.log(res.body);
      cy.log(res.duration);
      cy.log(res.headers);
   });*/
   //createNewCardAction.navigatedToTrelloWepsite();
   sharedAction.loginToTrelloWepsite();
   //createNewCardAction.createBord(BoardName)
   //createNewCardAction.addList(ListName);
  /* sharedDataUtil.createNewBoard(BoardName).then((res)=>{
      boardUrl =res.body.url;
      boardId = res.body.id;

   })*/
   sharedDataUtil.createNewBoard(BoardName).as('BoardResponse');
   

});
Given("The user navigate to board on Trello",()=>{
  // sharedAction.opebBoard(boardUrl);
   cy.get('@BoardResponse').then((data)=>{
   cy.log(data);
   sharedAction.opebBoard(data.body.url);
})
})
When("The user click on add card button",()=>{
   createNewCardAction.addCardButton();

});
When("Enter the name of card to add new card",()=>{
   createNewCardAction.enterCardName(CardName);
});
When("Click on add card button",()=>{
   createNewCardAction.createCardButton(CardName);
});
Then("The Card should be created successfully",()=>{  
   createNewCardAssertion.cardShouldBeExist();
}); 
after(()=>{
cy.get("@BoardResponse").then((data)=>{
   sharedDataUtil.deleteBoard(data.body.id);
})
//sharedDataUtil.deleteBoard(bordId);
})

