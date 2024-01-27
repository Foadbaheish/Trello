class sharedAssertions{
    cardNotExist(){
        return cy.get(".RD2CmKQFZKidd6").first().find("li").should("not.exist");
    }

}
export default sharedAssertions;