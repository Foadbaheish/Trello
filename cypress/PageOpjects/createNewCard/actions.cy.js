class createNewCardActions{
   
   
    createBord(BoardName){
cy.get("[data-testid=header-create-menu-button]> .nch-icon").click();
cy.wait(1000);
cy.get("[data-testid=header-create-board-button]").click();
cy.get(".nch-textfield__input").clear().type(BoardName);
cy.get("[data-testid=create-board-submit-button]").click();
return this;
}
addList(ListName){
cy.get("[data-testid=list-name-textarea]").clear().type(ListName);
cy.get("[data-testid=list-composer-add-list-button]").click();
}
addCardButton(){
return cy.get("li:nth-child(1) [data-testid=list-footer]").click();
}
enterCardName(CardName){
 return cy.get("[data-testid=list-card-composer-textarea]").clear().type(CardName);
}   
createCardButton(CardName){
//cy.get("[data-testid=list-card-composer-add-card-button]").click()
//cy.intercept("/1/cards",{name:"xyz",log:true}).as("Card")//log to be visible
cy.intercept("/1/cards",(req)=>{
    req.body={name:CardName}
}).as("Card")
    cy.findByTestId("list-card-composer-add-card-button").first().click();
    cy.wait("@Card")
        cy.get("@Card").then((intercept)=>{
        expect(intercept.response.body.name).to.eql(CardName);
        //expect(intercept.response.body.name).to.eql("xyz");

    })
    return this;
}}

export default createNewCardActions;