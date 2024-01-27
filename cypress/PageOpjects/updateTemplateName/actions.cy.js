class upDateTemplateNameActions{
    clickOnTemplate(){
        return cy.get(".amUfYqLTZOvGsn").click();
    }
    clickOnTemplateName(){
        return cy.get(".mod-card-back-title").click();
    }
    newTemplateName(TemplateName){
        return cy.get(".mod-card-back-title").clear().type(TemplateName+"{enter}")
    }
    

}
export default upDateTemplateNameActions;