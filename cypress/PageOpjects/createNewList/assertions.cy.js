class createNewListAssertions{
    checkList(ListName){
     cy.get(":nth-child(4)  .mKJWg6W_CLHoiO").invoke('text').then(actualText => {
        console.log('listName:', ListName);
        console.log('Actual Text:', actualText);
        expect(actualText).to.contain(ListName);
      });
      return this;
 
}
}
export default createNewListAssertions;