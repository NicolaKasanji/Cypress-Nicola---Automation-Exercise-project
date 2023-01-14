/// <reference types='cypress' />

const { findAllByAltText } = require("@testing-library/dom");

describe("Check the possibility of logging in", () => {
    it('checks the ability of going to the login panel', () => {
        cy.visit('https://automationexercise.com')
        .get('a[href="/"]')
        .contains('Home')
        .should('be.visible')
        .invoke('css', 'orange')
        .get('a[href="/login"]')
        .contains(' Signup / Login')
        .click()
        .get('a[href="/login"]')
        .invoke('css', 'orange')
    });

    it('checks the ability of logging in', () => {
        cy.visit('https://automationexercise.com/login')
        .get('[action="/signup"]')
        .parent()
        .should('contain.text', 'New User Signup!')
        .get('[action="/login"]')
        .parent()
        .within(() => {
          cy.get('[placeholder="Email Address"]')
            .type('ad@gmail.com')
            .get('[placeholder="Password"]')
            .type('Test{enter}')
            .get('[action="/login"]')
            .findAllByText('Your email or password is incorrect!')
            .should('exist')
            .then(() => {
              cy.get('[placeholder="Email Address"]')
                .clear()
                .type('adres@gmail.com')
                .get('[placeholder="Password"]')
                .clear()
                .type('Test1{enter}')
                })
            })
        .get('a[href="/"]')
        .contains('Home')
        .should('be.visible')
        .invoke('css', 'orange')
        .get('body').then(($body) => {
                if($body.find('a[href="/logout"]').length) {
                cy.get('a[href="/logout"]')
                  .should('be.visible') 
            } else {
                throw new Error('Test fail - you are not logged in!')
            }
        })
    })
});