describe('Prueba API - PetStore', () => {
  it('Flujo completo: Crear, Consultar, Actualizar y Validar por Estado', () => {
    const id = 556677;
    
    // 1. Añadir Mascota (POST)
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
      id: id,
      name: "CypressPet",
      status: "available"
    }).then((res) => {
      expect(res.status).to.eq(200);
      
      // 2. Consultar por ID (GET)
      cy.request('GET', `https://petstore.swagger.io/v2/pet/${id}`).then((resGet) => {
        expect(resGet.body.name).to.eq("CypressPet");

        // 3. Actualizar Nombre y Estado a "sold" (PUT) 
        cy.request('PUT', 'https://petstore.swagger.io/v2/pet', {
          id: id,
          name: "CypressPet-Actualizado",
          status: "sold"
        }).then((resPut) => {
          expect(resPut.status).to.eq(200);

          // 4. CONSULTAR POR ESTADO: Buscar las vendidas (GET) 
          cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold').then((resStatus) => {
            expect(resStatus.status).to.eq(200);
            // Validar que nuestra mascota está en la lista de vendidos
            const mascota = resStatus.body.find(p => p.id === id);
            expect(mascota.status).to.eq("sold");
          });
        });
      });
    });
  });
});