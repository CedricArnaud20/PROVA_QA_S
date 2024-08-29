describe('Trello API Test', () => {
  let boardId;

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
      // Verificar se a resposta foi bem-sucedida
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', boardName);

      boardId = response.body.id;
      cy.log('Board ID: ' + boardId); // Logar o ID para referência
    });

  });


  it('Deve excluir o Board cadstradap', () => {
      const deleteUrl = `https://api.trello.com/1/boards/${boardId}`
      
    cy.request({
      method: 'DELETE',
      url: deleteUrl,
      qs:{
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    })

  });
});