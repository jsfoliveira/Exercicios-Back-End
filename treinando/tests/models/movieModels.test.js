const { expect } = require('chai');

// duble de testes
const sinon = require('sinon');

const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModels');


// para inserir, precisa de um filme pra inserir
describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });


  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      // inserir payloadMovie no BD
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
// espera que a saída seja que o objeto contenha a propriedade id do filme inserido
      expect(response).to.have.a.property('id')
    });
  });
});