class hideTemplateActions{
    rightClickOnCard() {
        return cy.get("[data-testid=quick-card-editor-button]").trigger('contextmenu', { force: true });
        
      }
      hideFromList(){
        cy.get("[data-testid=quick-card-editor-buttons] > :last()").click();
      }


}
export default hideTemplateActions;