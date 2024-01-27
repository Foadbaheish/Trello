import { list1,list2,list3 } from "../../support/constans.cy";
class updateListNameActions{
    upDateToDoTitle(){
        
        cy.get(".KLvU2mDGTQrsWG").first().click();
        cy.get(".mKJWg6W_CLHoiO [data-testid='list-name-textarea']").first().clear().type(list1);
        return this;
    } 
    
    upDateDoingTitle() {
        cy.get(".KLvU2mDGTQrsWG").eq(1).click();
        cy.get(".mKJWg6W_CLHoiO [data-testid='list-name-textarea']").eq(1).clear().type(list2);
        return this;
    }
    
    upDateDoneTitle() {
        cy.get(".KLvU2mDGTQrsWG").eq(2).click();
        cy.get(".mKJWg6W_CLHoiO [data-testid='list-name-textarea']").eq(2).clear().type(list3);
        return this;
    }
    

}
export default  updateListNameActions;