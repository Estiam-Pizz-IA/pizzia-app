import {UrlLogin} from "./../fixtures/inscription.json"
import {email} from "./../fixtures/inscription.json"
import {mdp} from "./../fixtures/inscription.json"
import {lastName} from "./../fixtures/inscription.json"
import {firstName} from "./../fixtures/inscription.json"
import {fakeEmail} from "./../fixtures/inscription.json"
import {fakeMdp} from "./../fixtures/inscription.json"


beforeEach(() =>{
    cy.visit(UrlLogin)
});

it('Inscription avec de bonnes données', ()=>{

    cy.get('.page-module__X_Z_4a__btn_inscription').contains('Inscription').click({force:true})
    
    cy
        .get('.page-module__IMkl-G__form').contains('PizzIA Inscription').should('be.visible')
        .get('input[placeholder="Adresse email"]').type(email)
        .get('input[placeholder="Nom"]').type(lastName)
        .get('input[placeholder="Prénom"]').type(firstName)
        .get('.page-module__IMkl-G__input[type="password"]').type(mdp)

    cy.get('.page-module__IMkl-G__button_inscription').contains('INSCRIPTION').click({force:true})
    cy.wait(100)
    cy.get('.page-module__X_Z_4a__form').contains('Connexion').should('be.visible')


})

 it('Inscription avec un mauvais mot de passe', ()=>{

    cy.get('.page-module__X_Z_4a__btn_inscription').contains('Inscription').click({force:true})
    //cy.wait(8000)
    cy
        .get('.page-module__IMkl-G__form').contains('PizzIA Inscription').should('be.visible')
        .get('input[placeholder="Adresse email"]').type(email)
        .get('input[placeholder="Nom"]').type(lastName)
        .get('input[placeholder="Prénom"]').type(firstName)
        .get('.page-module__IMkl-G__input[type="password"]').type(fakeMdp)


    cy.get('.page-module__IMkl-G__button_inscription').contains('INSCRIPTION').click({force:true})
    cy.on('window:alert', (message) => {
    expect(message).to.eq('Le mot de passe doit faire au moins 6 caratères.')
    })
})

it('Inscription avec un mauvais email', ()=>{

    cy.get('.page-module__X_Z_4a__btn_inscription').contains('Inscription').click({force:true})

    cy
        .get('.page-module__IMkl-G__form').contains('PizzIA Inscription').should('be.visible')
        .get('input[placeholder="Adresse email"]').type(fakeEmail)
        .get('input[placeholder="Nom"]').type(lastName)
        .get('input[placeholder="Prénom"]').type(firstName)
        .get('.page-module__IMkl-G__input[type="password"]').type(mdp)


    cy.get('.page-module__IMkl-G__button_inscription').contains('INSCRIPTION').click({force:true})
    cy.on('window:alert', (message) => {
    expect(message).to.eq('The email address is improperly formatted.')
    })
})