class updateListNameAssertions{
checkUpDate(){
    cy.get(".KLvU2mDGTQrsWG").first().should('not.equal', 'To Do')
    cy.get(".KLvU2mDGTQrsWG").eq(1).should('not.equal', 'Doing')
    cy.get(".KLvU2mDGTQrsWG").eq(2).should('not.equal', 'Done')
    return this;
}
}
export default updateListNameAssertions;