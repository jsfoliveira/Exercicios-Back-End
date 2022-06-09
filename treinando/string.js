// essa informação depois do ? é query string: /produtos?q=Geladeira&precoMaximo=2000
// query string é usado em funcionalidades de pesquisas

// quando fizer essa busca no navegador, vai aparecer as receitas que tem name macarrão e o preço máximo: http://localhost:3002/recipes/search?name=Macarrão&maxPrice=40
// EU DEFINO O QUE QUERO FILTRAR NO LOCALHOST
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});
