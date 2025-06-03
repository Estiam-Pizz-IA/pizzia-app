import {UrlPizza} from "./../fixtures/pizza.json"
import {pizza} from "./../fixtures/pizza.json"
import {description} from "./../fixtures/pizza.json"
import {prix} from "./../fixtures/pizza.json"

beforeEach(() =>{
    cy.visit(UrlPizza)
});

it('Affichage des pizzas', ()=>{
 
    cy.get(".cardProduct-module__B2l_pG__productCard").contains(pizza).should('be.visible')

})


it('Affichage de la composition des pizzas', ()=>{
 
    cy.get('.cardProduct-module__B2l_pG__productCard').contains(description).should('exist')

})

it('Affichage du prix des pizzas', ()=>{
     cy.get(':nth-child(1) > :nth-child(3) > strong').contains(prix).should('be.visible')
})
