describe('Trello API Test', () => {
  let boardId;

  it('Should create a Trello board', () => {
    // Definir as variáveis necessárias
    const apiUrl = 'https://api.trello.com/1/boards';
    const apiKey = '8316e2888766596b2e87f0900b5018fd';
    const apiToken = 'ATTA9c1bcc64823c80b0aab61a465311a455e33829f2f66c8409b0288435eeeec082E35539DC';
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
