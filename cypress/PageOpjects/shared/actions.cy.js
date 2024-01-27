class sharedActions{
    opebBoard(url){
        return cy.visit(url);
        
    }
    navigatedToTrelloWepsite(){
        return cy.visit("/");
         
    }
    loginToTrelloWepsite(){
        return cy.trelloLogin();
    }
    clickOnCard(){
        return cy.get(".amUfYqLTZOvGsn").click();
    }
    makeTemplateButton(){
        cy.get(".js-convert-to-template").scrollIntoView();
        cy.get(".js-convert-to-template").click();
        return this;
    }
   
}
export default sharedActions;