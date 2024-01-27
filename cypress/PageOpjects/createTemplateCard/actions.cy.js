class createTemplateCardAcctions{
    clickOnTemplateIcon(){
        return cy.get("[data-testid=card-template-list-button]").first().click();
    }
    createTemplateButton(){
       return cy.get("[data-testid=create-new-template-card-button]").click();
    }
    templateTitle(TemplateName){
       return cy.get("[data-testid=create-template-card-composer]").clear().type(TemplateName);

    }
    addTemplate(){
        cy.get("[data-testid=new-template-card-submit-button]").click();
        cy.get(".dialog-close-button").click();
        return this;
    }
}
export default createTemplateCardAcctions;
