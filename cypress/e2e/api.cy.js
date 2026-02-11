describe('Prueba API - PetStore', () => {
  it('Validar creación y consulta de mascota', () => {
    const id = 556677;
    
    // Crear Mascota
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
      id: id,
      name: "CypressPet",
      status: "available"
    }).then((res) => {
      expect(res.status).to.eq(200);
      
      // Consultar Mascota
      cy.request('GET', `https://petstore.swagger.io/v2/pet/${id}`)
        .then((resGet) => {
          expect(resGet.body.name).to.eq("CypressPet");
        });
    });
  });
});