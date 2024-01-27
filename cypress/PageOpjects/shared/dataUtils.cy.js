import { APIKEY, TOKEN} from "../../support/constans.cy";


class sharedDataUtils{
    createNewBoard=(BoardName)=>{
       return cy.request("POST",`https://api.trello.com/1/boards/?name=${BoardName}&key=${APIKEY}&token=${TOKEN}`);
    }
    deleteBoard=(BoardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${BoardId}?key=${APIKEY}&token=${TOKEN}`);
    }
    createList=(BoardId,ListName)=>{
        return cy.request("POST",`https://api.trello.com/1/lists?name=${ListName}&idBoard=${BoardId}&key=${APIKEY}&token=${TOKEN}`)

    }
    createCard=(listId)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKEY}&token=${TOKEN}`)

    }
    archiveCard=(listId)=>{
        return cy.request("POST",`https://api.trello.com/1/lists/${listId}/archiveAllCards?key=${APIKEY}&token=${TOKEN}`)
    }
    
    newCardName=(cardId,cardName)=>{
        return cy.request({
          method: "PUT",
          url: `https://api.trello.com/1/cards/${cardId}`,
          qs: {
            key: APIKEY,
            token: TOKEN,
            name:cardName
             }
        })
    }
    createTemplateCard = (listId, cardName) => {
    return cy.request({
        method: 'POST',
        url: 'https://api.trello.com/1/cards',
        qs: {
          key: APIKEY,
          token: TOKEN,
        },
        body: {
          name: cardName,
          idList: listId,
          isTemplate: true, 
        },
      });
        
}}
     
 

export default sharedDataUtils;