describe('Trello API Test', () => {
  let boardId;

  it('Should create a Trello board', () => {
    // Definir as variáveis necessárias
    const apiUrl = 'https://api.trello.com/1/boards';
    const apiKey = '';
    const apiToken = '';
    const boardName = 'Board013';

    // Fazer a solicitação POST
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
});
