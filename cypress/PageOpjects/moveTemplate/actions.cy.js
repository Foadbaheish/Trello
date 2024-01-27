class moveTemplateActions{
    clickONTemplate(){
        return cy.get(".amUfYqLTZOvGsn").click();
    }
    clickOnMoveButton(){
        cy.get(".js-move-card").scrollIntoView();
        cy.get(".js-move-card").click();
        return this;
    }
    selectDoingList(){
        return  cy.get("[data-testid=move-card-popover-select-list-destination]").select("Doing")

    }
    clickOnMoveButtonToMove(){
        return cy.get("[data-testid=move-card-popover-move-button]").click();
    }
    selectDoneList(){
        return cy.get("[data-testid=move-card-popover-select-list-destination]").select("Done");

    }



}
export default moveTemplateActions;