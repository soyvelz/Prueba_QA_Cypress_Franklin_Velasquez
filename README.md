# QA Automation Project - SauceDemo  - Franklin Velasquez.

Este repositorio contiene una solucion de automatización de pruebas de extremo a extremo (E2E) para el flujo de negocio de **SauceDemo**, desarrollada con un enfoque en robustez y mantenibilidad.

## Descripcion del Proyecto
El objetivo principal es validar la integridad del flujo de compra critico. La automatizacion asegura que los componentes del sistema interactuen correctamente desde la **autenticación** hasta la **confirmación de la orden**.

### Funcionalidades Automatizadas:
* **Modulo de Autenticacion:** Validación de login con diversos perfiles de usuario.
* **Gestion de Carrito:** Selección, agregación y verificación de productos en tiempo real.
* **Proceso de Checkout:** Validación de formularios de envío y flujo completo de pago.
* **Verificacion de Resultados:** Confirmacion de estados finales y mensajes de éxito del sistema.

## Stack Tecnologico
* **Framework:** Cypress
* **Lenguaje:** JavaScript (ES6+)
* **Control de Versiones:** Git / GitHub
* **Arquitectura:** Pruebas E2E con selectores basados en **atributos de datos (data-test)**.

## Ejecución de Pruebas
Para replicar el entorno de pruebas localmente, siga estas instrucciones:

1. **Clonacion:**
   `git clone https://github.com/soyvelz/Prueba_QA_Cypress_Franklin_Velasquez.git`

2. **Instalacion de Dependencias:**
   `npm install`

3. **Ejecucion:**
   * **Modo Interactivo:** `npx cypress open`
   * **Modo Headless:** `npx cypress run`

---
**Desarrollado por:** Franklin Velasquez  
**Especialidad:** Ingeniero / QA Automation & Business Intelligence