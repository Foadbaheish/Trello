// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//intercept request we use it for wait
//import { Email,Password } from "./constans.cy";//we can use the const data from const file
Cypress.Commands.add('trelloLogin',()=>{
    cy.intercept("/1/resources/templates/categories").as("login");
    cy.visit("/");
    cy.fixture("example.json").then((data)=>{
    cy.get("#user").clear().type(data.email);
    cy.contains("Continue").click()
    cy.wait(3000);
    const pass =data.password;
    cy.origin("https://id.atlassian.com",{args:pass},(pass)=>{
        cy.get("#password").clear().type(pass+"{enter}");
        

        
    })
    cy.wait("@login");
}
)});
Cypress.Commands.add("findByTestId",(testId)=>{
    cy.get(`[data-testid=${testId}]`)
})
    //Cypress.Commands.add('trelloLogin',()=>{
    //cy.visit("/");
    //cy.fixture("example.json").then((data)=>{
    //cy.get("#user").clear().type(data.email);
    //cy.contains("Continue").click()
    //cy.wait(6000);
    //const pass =data.password;
    //cy.origin("https://id.atlassian.com",{args:pass},(pass)=>{
        //cy.get("#password").clear().type(pass+"{enter}");
      //  cy.wait(6000);

    
