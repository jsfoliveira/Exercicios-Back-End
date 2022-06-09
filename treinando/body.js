// uma forma de não deixar as informações trafegadas tão expostas é através do corpo da requisição, onde o que acontece é uma compressão dos dados enviados que só serão descomprimidos do lado do back-end.

// para enviar dados no body da requisição, geralmente você precisa usar algum tipo específico de requisição, como por exemplo, utilizando o verbo HTTP POST.

// body: É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que você quer enviar para uma string JSON. Por isso que do lado do back-end é necessário utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.

// é preciso instalar o pacote bodyParser: $ npm i body-parser

app.post('/recipes', function (req, res) {
	const { id, name, price } = req.body;
	recipes.push({ id, name, price});
	res.status(201).json({ message: 'Recipe created successfully!'});
});

