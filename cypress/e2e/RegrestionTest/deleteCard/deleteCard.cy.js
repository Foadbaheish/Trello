/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import deleteCardActions from "../../../PageOpjects/deleteCard/actions.cy";
import deleteCardAssertions from "../../../PageOpjects/deleteCard/assertions.cy";
import sharedDataUtils from "../../../PageOpjects/shared/dataUtils.cy"
import sharedActions from "../../../PageOpjects/shared/actions.cy";
import sharedAssertions from "../../../PageOpjects/shared/assertions.cy";
import {BoardName,ListName,CardName}  from "../../../support/constans.cy";
const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();
const  sharedAssertion =new  sharedAssertions();

Before(()=>{
    sharedAction.loginToTrelloWepsite();
    sharedDataUtil.createNewBoard(BoardName).as('BoardRes');
    cy.get("@BoardRes").then((data)=>{
        sharedDataUtil.createList(data.body.id,ListName).as("ListRes");
     })
    cy.get("@ListRes").then((listdata)=>{
        sharedDataUtil.createCard(listdata.body.id).as("CardRes");
     })
     cy.get("@CardRes").then((listdata)=>{
        sharedDataUtil.newCardName(listdata.body.id,CardName)
     })
     cy.get("@ListRes").then((listdata)=>{
        sharedDataUtil.archiveCard(listdata.body.id)
     })
    
  
  
    });
    Given("The user navigate to board on wepsite",()=>{
      cy.get("@BoardRes").then((data)=>{
        cy.log(data);
        sharedAction.opebBoard(data.body.url);
      })
    })
    When("The user click on menu",()=>{
        deleteCardAction.clickOnMenu();
      });
    When("The user click on Archive button",()=>{
        deleteCardAction.archiveButton();
      });
    When("The user click on delete button",()=>{
       deleteCardAction.clickOnDeleteButton();
      });
    When("The user click confirm delete button",()=>{
        deleteCardAction.clickOnConfirmDeleteButton();
      });
    Then("The card should be deleted successfully",()=>{  
      sharedAssertion.cardNotExist();
      }); 
    

    After(()=>{
        cy.get("@BoardRes").then((data)=>{
          sharedDataUtil.deleteBoard(data.body.id);
       })
        })
