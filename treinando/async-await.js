// Muitas vezes, queremos somente buscar o resultado sem necessariamente usar uma API de Promises. 
// async/await foram criadas para trabalhar com Promises como se estivéssemos no método síncrono.
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()