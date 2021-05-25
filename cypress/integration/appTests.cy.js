/* eslint-disable mocha/no-synchronous-tests */

describe('Application Tests', () => {
  it('loads the page.', () => {
    cy.visit('http://localhost:8080');

    cy.contains('GetVaxxed!');
  });

  it('allows to fill the form and shows a success message after submit.', () => {
    cy.visit('http://localhost:8080');

    cy.contains('22.05.').click();
    cy.contains('09:10').click();
    cy.findByText('Ihr Name:').type('Kim Müller');
    cy.findByText('Termin verbindlich buchen').click();

    cy.contains('Ihr Termin wurde erfolgreich gebucht!');
  });
});
