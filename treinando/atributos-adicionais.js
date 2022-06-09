// No writeFile, assim como ocorre no readFile, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional em seus métodos.

// A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita.

// Se o arquivo não existir, ele é criado. Caso contrário, é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx', por exemplo, funciona como 'w', mas lança um erro caso o arquivo já exista.

const fs = require('fs').promises;

//  > A flag ``´wx`` abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado:

fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });
  // vai criar um novo arquivo chamado meu-novo-arquivo.txt e escrever o texto 'Arquivo salvo'.