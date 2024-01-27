
class createNewListActions{
    addNewList(){
        return  cy.get("[data-testid=list-composer-button]").click();
    }
    addListName(ListName){
        return cy.get("[data-testid=list-name-textarea]:eq(3)").clear().type(ListName);
    }
    createList(){
        return cy.get("[data-testid=list-composer-add-list-button]").click();
    }

}
export default createNewListActions;