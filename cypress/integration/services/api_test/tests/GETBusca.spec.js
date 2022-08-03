import * as GETBusca from '../requests/GETBusca.request';

describe ('Teste de Api, GET request', () => {
    it('Exibir campo name da estrutura list e validar status code', () => {
        GETBusca.search().should((response) => {
            expect(response.status).to.equal(200);
            cy.log(response.body.data.list.name); 
            expect(response.body.data.list.name).to.equal("Professional"); 
        })
    });
});