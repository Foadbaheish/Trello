class deleteCardActions{
    clickOnMenu(){
        return  cy.get(".GDunJzzgFqQY_3").click();

    }
    archiveButton(){
        return cy.get(".js-open-archive").click();
    }
    clickOnDeleteButton(){
        
        return  cy.get(".quiet a:last()").click();

    }
    clickOnConfirmDeleteButton(){
        return cy.get(".js-confirm").click();
    }


}
export default deleteCardActions;