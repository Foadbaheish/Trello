class createTemplateCardAssertions{
    chcekIfTemplateCreate(){
        return cy.get("[data-testid=badge-card-template] span:nth-child(2)").should("contain","This card is a template.");
    }
}
export default createTemplateCardAssertions;