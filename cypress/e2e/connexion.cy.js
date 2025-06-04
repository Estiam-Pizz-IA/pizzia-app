import {UrlLogin} from "./../fixtures/connexion.json"
import {mdp} from "./../fixtures/connexion.json"
import {fakeMdp} from "./../fixtures/connexion.json"
import {email} from "./../fixtures/connexion.json"
import {fakeEmail} from "./../fixtures/connexion.json"

beforeEach(() =>{
    cy.visit(UrlLogin)
});


it('Connexion avec un utilisateur valide', () => {   
    cy
        .get('input[placeholder="Adresse email"]').type(email)
        .get('input[placeholder="Mot de passe"]').type(mdp)
        .get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
        .get('.navbar-module__QXtwcq__nav_item').contains('ACCEUIL').should('be.visible')
        .get('.navbar-module__QXtwcq__nav_item').contains('PROFILE').click({force:true}) 
        .get('.page-module__h4SgrW__profil_item').contains('test3.cypress@gmail.com').should('be.visible')
})

it('Connexion avec un mauvais utilisateur et un bon mdp', () => {
    cy
        .get('input[placeholder="Adresse email"]').type(fakeEmail)
        .get('input[placeholder="Mot de passe"]').type(mdp)
        .get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})

    cy.on('window:alert', (message) => {
    expect(message).to.eq('Erreur lors de la connexion')
})
})

it('Connexion avec un mauvais mdp mais bon utilisateur', () => {
    cy
        .get('input[placeholder="Adresse email"]').type(email)
        .get('input[placeholder="Mot de passe"]').type(fakeMdp)
        .get('.page-module__X_Z_4a__btn_connexion').contains('Connexion').click({force:true})
        
    cy.on('window:alert', (message) => {
    expect(message).to.eq('Erreur lors de la connexion')
})
})