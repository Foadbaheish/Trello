class createNewCardAssertions{
    cardShouldBeExist(){
      return  cy.get(".RD2CmKQFZKidd6").first().find("li").should("have.attr","data-testid")
    }
}
export default createNewCardAssertions;