import {UrlLogin} from "./../fixtures/commande.json"
import {email} from "./../fixtures/commande.json"
import {mdp} from "./../fixtures/commande.json"
import {pizza} from "./../fixtures/commande.json"


beforeEach(() =>{
    cy.visit(UrlLogin)
});

it('Passer une commande', ()=>{
    cy
        .get('input[placeholder="Adresse email"]').type(email)
        .get('input[placeholder="Mot de passe"]').type(mdp)
        .get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
        .get('.navbar-module__QXtwcq__nav').contains('COMMANDES').should('be.visible').click({force:true})
        

    cy
        .wait(1000)
        .get(".cardProduct-module__B2l_pG__productCard").contains(pizza).should('be.visible')
        .get('.cardProduct-module__B2l_pG__addToCartButton').contains('Ajouter au panier').click({force:true})
        .get('.MuiButtonBase-root').contains('Passer une commande').click({force:true})  
        .get('.MuiGrid-root').contains('Aucune commande trouvée').should('be.visible')
})

it('Retirer la pizza du panier', ()=>{
    cy
        .get('input[placeholder="Adresse email"]').type(email)
        .get('input[placeholder="Mot de passe"]').type(mdp)
        .get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
        .get('.navbar-module__QXtwcq__nav').contains('COMMANDES').should('be.visible').click({force:true})
        

    cy
        .wait(1000)
        .get(".cardProduct-module__B2l_pG__productCard").contains(pizza).should('be.visible')
        .get('.cardProduct-module__B2l_pG__addToCartButton').contains('Ajouter au panier').click({force:true})
        .get('.cartProduct-module__KjE-Fa__removeFromCartButton').contains('Retirer du panier').click({force:true})
        .get('.MuiButtonBase-root').contains('Passer une commande').click({force:true})  
        .get('.MuiGrid-root').contains('Aucune commande trouvée').should('be.visible')
})