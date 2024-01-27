class upDateTemplateNameAssertions{
    checkUpDateTemplateName(TemplateName){
        cy.get(".card-detail-title-assist").invoke('text').then(actualText => {
            console.log('TemplateName:', TemplateName);
            console.log('Actual Text:', actualText);
            expect(actualText).to.eql(TemplateName);
          });
          return this;
}}
export default upDateTemplateNameAssertions;