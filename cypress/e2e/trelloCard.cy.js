describe('Trello Card API Test', () => {
    let cardId; //váriaivél para guarda o id do card gerado

    const apiUrl = '/cards';
    const apiKey = Cypress.env('apiKey');
    const apiToken = Cypress.env('apiToken');
    const cardName = 'teste01';

    it('Deve cadastrar um card com sucesso', () => {
        cy.request({
            method: 'POST',
            url: apiUrl,
            qs: {
                idList: '66cff25ec19843d96533c484',
                key: apiKey,
                token: apiToken,
                name: cardName
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', cardName);

            //capturanto id do card salvando numa const para poder realizar delete
            cardId = response.body.id;
            cy.log('Card ID: ' + cardId); // Log the ID for reference
        });
    });

    it('Deve exlcuir um card com sucesso', () => {
        //definido url de exclusão
        const deleteCardUrl = `/cards/${cardId}`;

        cy.request({
            method: 'DELETE',
            url: deleteCardUrl,
            qs: {
                key: apiKey,
                token: apiToken
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
