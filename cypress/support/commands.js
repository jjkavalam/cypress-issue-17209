import { getFlag } from '../../package/flag'

Cypress.Commands.add('checkFlagIsSet', () => {
    if (!getFlag()) throw new Error("Flag was not set !");
    cy.log("flag was set");
})
