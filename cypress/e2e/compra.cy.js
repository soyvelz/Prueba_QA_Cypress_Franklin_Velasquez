describe('Prueba E2E - SauceDemo', () => {
  it('Debe comprar dos productos exitosamente', () => {
    cy.visit('https://www.saucedemo.com/')
    
    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Agregar productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    // Ir al carrito y pagar
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    // Formulario (Datos Franklin)
    cy.get('[data-test="firstName"]').type('Franklin')
    cy.get('[data-test="lastName"]').type('Velasquez')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    // Finalizar
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
  })
})