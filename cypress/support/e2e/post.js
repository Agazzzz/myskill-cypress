it('Create a user', () => {
    let body = {
    "id": 0,
    "username": Cypress.env('username'),
    "firstName": "bagas",
    "lastName": "kurniawan",
    "email": "bagask194@mailsac.com",
    "password": "12345",
    "phone": "081213422378",
    "userStatus": 0
  }
  console.log(body);
  cy.request('POST', '/user', body).as('createUser');
  // ads new Todo item by defining Todo name
  cy.get('@createUser').then(createUser => {
    expect(createUser.status).to.eq(200);
  });
});