/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import updateListNameAssertions from "../../../PageOpjects/updateListName/assertions.cy"
import updateListNameActions from "../../../PageOpjects/updateListName/actions.cy"
import sharedDataUtils from "../../../PageOpjects/shared/dataUtils.cy"
import sharedActions from "../../../PageOpjects/shared/actions.cy";
import  BoardName  from "../../../support/constans.cy";
const sharedAction = new sharedActions();
const sharedDataUtil = new sharedDataUtils();
const updateListNameAction =new updateListNameActions();
const updateListNameAssertion = new updateListNameAssertions();
Before(()=>{
    sharedAction.loginToTrelloWepsite();
    sharedDataUtil.createNewBoard(BoardName).as('BoardRes');
})
Given("The user navigate to board on wepsite",()=>{
    cy.get('@BoardRes').then((data)=>{
      cy.log(data);
      sharedAction.opebBoard(data.body.url);
    })
  })
When("The user click on To Do list title to update it",()=>{
  updateListNameAction.upDateToDoTitle();

})
When("The user click on Doing list title to update it",()=>{
  updateListNameAction.upDateDoingTitle();
})
When("The user click on Done list title to update it",()=>{
 updateListNameAction.upDateDoneTitle();
})

Then("The lists titles should be changed successfully",()=>{
updateListNameAssertion.checkUpDate();
})


After(()=>{
   cy.get("@BoardRes").then((data)=>{
        sharedDataUtil.deleteBoard(data.body.id);
     })
})
 
