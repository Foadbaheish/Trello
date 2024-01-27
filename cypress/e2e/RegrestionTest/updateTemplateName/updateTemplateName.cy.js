/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import upDateTemplateNameActions from"../../../PageOpjects/updateTemplateName/actions.cy"
import upDateTemplateNameAssertions from "../../../PageOpjects/updateTemplateName/assertions.cy";
import sharedDataUtils from "../../../PageOpjects/shared/dataUtils.cy"
import sharedActions from "../../../PageOpjects/shared/actions.cy";
import {BoardName,ListName,CardName,TemplateName}  from "../../../support/constans.cy";
const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const updateTemplateNameAction = new upDateTemplateNameActions();
const updateTemplateNameAssertion = new upDateTemplateNameAssertions();

Before(()=>{
    sharedAction.loginToTrelloWepsite();
    sharedDataUtil.createNewBoard(BoardName).as('BoardRes');
    cy.get("@BoardRes").then((data)=>{
        sharedDataUtil.createList(data.body.id,ListName).as("ListRes");
     })
    cy.get("@ListRes").then((listdata)=>{
        sharedDataUtil.createTemplateCard(listdata.body.id,CardName).as("CardRes");
     })
     cy.get("@CardRes").then((listdata)=>{
        sharedDataUtil.newCardName(listdata.body.id,CardName)
     })
     
})
    
    Given("The user navigate to board on wepsite",()=>{
        cy.get("@BoardRes").then((data)=>{
          cy.log(data);
          sharedAction.opebBoard(data.body.url);
        })
    })
    When("The user click on template card",()=>{
        updateTemplateNameAction.clickOnTemplate();
        });
    When("The user click on template name",()=>{
        updateTemplateNameAction.clickOnTemplateName();
        });
    When("The user enter the new template name",()=>{
        updateTemplateNameAction.newTemplateName(TemplateName);
        });
    Then("The template name should be update successfully",()=>{  
        updateTemplateNameAssertion.checkUpDateTemplateName(TemplateName);

        }); 

    After(()=>{
        cy.get("@BoardRes").then((data)=>{
          sharedDataUtil.deleteBoard(data.body.id);
       })
        })