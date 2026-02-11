# QA Automation Project - E2E & API Testing - Franklin Velasquez

Este repositorio contiene una solución de automatización integral que incluye pruebas de extremo a extremo (E2E) para **SauceDemo** y pruebas de **APIs** para **PetStore**, desarrollada con un enfoque en robustez y mantenibilidad.

## Descripción del Proyecto
El objetivo es validar la integridad de los procesos críticos de negocio y la estabilidad de las interfaces de programación de aplicaciones.

### Funcionalidades Automatizadas:
* **E2E - SauceDemo:** Flujo completo desde la autenticación hasta la confirmación de la orden utilizando selectores `data-test`.
* **API - PetStore:** Validación de servicios REST (POST, GET, PUT) incluyendo la creación de registros y filtrado por estados (disponible/vendido).
* **Gestión de Carrito:** Selección y verificación de productos en tiempo real.
* **Verificación de Resultados:** Confirmación de códigos de estado HTTP y mensajes de éxito en la interfaz.

## Stack Tecnológico
* **Framework:** Cypress
* **Lenguaje:** JavaScript (ES6+)
* **Control de Versiones:** Git / GitHub
* **Arquitectura:** Pruebas E2E y API en una misma suite de pruebas.

## Ejecución de Pruebas
Para replicar el entorno de pruebas localmente, siga estas instrucciones:

1. **Clonación:**
   git clone https://github.com/soyvelz/Prueba_QA_Cypress_Franklin_Velasquez.git

2. **Instalación de Dependencias:**
   npm install

3. **Ejecución:**
   * **Modo Interactivo:** `npx cypress open`
   * **Modo Headless:** `npx cypress run`

---
**Desarrollado por:** Franklin Velasquez  
**Especialidad:** Ingeniero / QA Automation & Business Intelligence