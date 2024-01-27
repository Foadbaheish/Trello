/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../PageOpjects/shared/dataUtils.cy"
import sharedActions from "../../../PageOpjects/shared/actions.cy";
import { BoardName,ListName } from "../../../support/constans.cy";
import createNewListActions from "../../../PageOpjects/createNewList/actions.cy"
import createNewListAssertions from "../../../PageOpjects/createNewList/assertions.cy";
const createNewListAction = new createNewListActions();
const createNewListAssertion = new createNewListAssertions();
const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();

Before(()=>{
  sharedAction.loginToTrelloWepsite();
  sharedDataUtil.createNewBoard(BoardName).as('BoardRes');
 

  });
  Given("The user navigate to board on wepsite",()=>{
    cy.get('@BoardRes').then((data)=>{
      cy.log(data);
      sharedAction.opebBoard(data.body.url);
    })
    cy.screenshot('MyScreenshots/R0-full-page-screenshot',{capture:"fullPage", quality: 1 });
  })
  
  When("The user click on add another list button",()=>{
    createNewListAction.addNewList();
  
  });
  When("The user enter list title",()=>{
    createNewListAction.addListName(ListName);
  });
  When("The user click on add list button",()=>{
    createNewListAction.createList();
  });
  Then("The list should be created successfully",()=>{  
    
    createNewListAssertion.checkList(ListName);
  }); 
 
  After(()=>{
    cy.get("@BoardRes").then((data)=>{
      sharedDataUtil.deleteBoard(data.body.id);
   })
    })