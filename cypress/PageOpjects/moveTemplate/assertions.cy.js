class MoveTemplateAssertions {
    checkIfTemplateMoved() {
     cy.get(".RD2CmKQFZKidd6").first().find("li").should("not.exist");
     cy.get(".RD2CmKQFZKidd6").eq(1).find("li").should("not.exist");
     cy.get(".RD2CmKQFZKidd6").last().find("li").should("exist");
     return this;
    }
  }
  
  export default MoveTemplateAssertions;
  