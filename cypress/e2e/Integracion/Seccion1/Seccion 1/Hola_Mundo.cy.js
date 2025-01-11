describe ("Bienvenido al Curso de Cypress Seccion 1", function(){

    it ("Primer test de hola mundo",()=>{
        cy.log("Hola mundo");
        cy.wait(3000)
        })

it ("Segundo test - Campo Name", function(){
    cy.visit("http://zero.webappsecurity.com")
    cy.get('#signin_button').click()
    cy.wait(2000)
    cy.get('#user_login').type("username")
    cy.wait(2000)
    cy.get("#user_password").type("password")
    cy.wait(2000)
    cy.get('.btn').click()

     cy.wait(4000)
})
})