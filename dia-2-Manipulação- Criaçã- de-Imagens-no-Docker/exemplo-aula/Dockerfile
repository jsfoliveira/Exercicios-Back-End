# toda imagem docker precisa se basear de uma imagem base
FROM nginx
# COPY vai copiar a minha imagem /index.html e colar nesse arquivo destino /usr/share/nginx/html
COPY ./index.html /usr/share/nginx/html
# EXPOSE em qual porta o arquivo vai rodar
EXPOSE 3000
# Setar variáveis chave=valor, tipo uma const que vai dar valor a uma variável
ENV API_URL=http://localhost:8000/api/ 
# Pasta de trabalho da imagem
WORKDIR /usr/share/nginx/html
# Define um comando que quando acionado, vai pra dentro do workdir
RUN localhost
# O que será executado ao der um docker container run
# ENTRYPOINT vai definir qual executável que o container vai usar
ENTRYPOINT [ "/usr/share/nginx/html" ]
# CMD vai definir quais os parâmetros que serão enviados para o executável
CMD [ "-g", "daemon off; "]

#docker build .
## docker images (ver o id criado)
# docker container run -d -p 3000:80 id-do-container
# docker container ps (vê se tá rodando o container)
# digita o link no navegador pra testar com o localhost correto http://localhost:3000/