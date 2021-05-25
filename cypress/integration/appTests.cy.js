/* eslint-disable mocha/no-synchronous-tests */

describe('Application Tests', () => {
  it('loads the page.', () => {
    cy.visit('/');

    cy.contains('GetVaxxed!');
  });

  it('allows to fill the form and shows a success message after submit.', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3000/availableDates'
    },
    [{
      date: '22.05.',
      hours: [ '09:10 Uhr' ]
    }]);

    cy.visit('/');

    cy.contains('22.05.').click();
    cy.contains('09:10 Uhr').click();
    cy.findByText('Ihr Name:').type('Kim Müller');
    cy.findByText('Termin verbindlich buchen').click();

    cy.contains('Ihr Termin wurde erfolgreich gebucht!');
  });
});
