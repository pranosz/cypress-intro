/// <reference types="cypress" />

describe('E2E - Home Page', () => {
    it('Should open home page - automationpractice', () => {
        cy.visit('/');
        cy.get('.col-sm-7 > .btn').click();
        cy.get('.room-booking-form > .form-control').type('Piotr');
    });
});