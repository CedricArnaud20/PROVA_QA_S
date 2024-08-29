describe('Trello API Test', () => {
  let boardId; //váriaivél para guarda o id do board  gerado

  const apiUrl = '/boards';
  const apiKey = Cypress.env('apiKey');
  const apiToken = Cypress.env('apiToken');
  const boardName = 'Board013';


  it('Deve cadastar um novo board', () => {

    cy.request({
      method: 'POST',
      url: apiUrl,
      qs: {
        name: boardName,
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', boardName);

      //capturanto id do board salvando numa const para poder realizar delete
      boardId = response.body.id;
      cy.log('Board ID: ' + boardId); //
    });

  });


  it('Deve excluir o Board cadstradap', () => {
    //definido url de exclusão
    const deleteUrl = `/${boardId}`

    cy.request({
      method: 'DELETE',
      url: deleteUrl,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    })

  });
});