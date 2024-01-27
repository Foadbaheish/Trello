/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import createTemplateCardAcctions from "../../../PageOpjects/createTemplateCard/actions.cy";
import createTemplateCardAssertions from "../../../PageOpjects/createTemplateCard/assertions.cy"
import sharedDataUtils from "../../../PageOpjects/shared/dataUtils.cy"
import sharedActions from "../../../PageOpjects/shared/actions.cy";
import {BoardName,ListName,TemplateName}  from "../../../support/constans.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const createTemplateCardAcction = new createTemplateCardAcctions();
const createTemplateCardAssertion = new createTemplateCardAssertions(); 

Before(()=>{
    sharedAction.loginToTrelloWepsite();
    sharedDataUtil.createNewBoard(BoardName).as('BoardRes');
    cy.get("@BoardRes").then((data)=>{
        sharedDataUtil.createList(data.body.id,ListName);
     })
  
    
    });
    Given("The user navigate to board on wepsite",()=>{
        cy.get("@BoardRes").then((data)=>{
          cy.log(data);
          sharedAction.opebBoard(data.body.url);
        })
      })
      When("The user click on create template icon",()=>{
        createTemplateCardAcction.clickOnTemplateIcon()
        });
      When("The user click on create a new template button",()=>{
        createTemplateCardAcction.createTemplateButton();
        });
      When("The user enter the template title",()=>{
        createTemplateCardAcction.templateTitle(TemplateName);
        });
      When("The user click on add button",()=>{
        createTemplateCardAcction.addTemplate();
        });
      Then("The template should be created successfully",()=>{  
        createTemplateCardAssertion.chcekIfTemplateCreate();
        }); 




After(()=>{
    cy.get("@BoardRes").then((data)=>{
      sharedDataUtil.deleteBoard(data.body.id);
   })
    })