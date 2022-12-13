# EncostAi -> React-Native + Node.js
![logo](https://user-images.githubusercontent.com/104457353/207318182-7fb3338b-ef0f-4a27-afda-70f240c5f483.png)

Trabalho desenvolvido para a disciplina de PI e Mobile do terceiro período. Desenvolvimento realizado com React Native no Expo e Node.js no back-end.
Existe um total de 16 telas desenvolvidas para o front-end, como login, registro, menu, contatos de emergência, solicitação de vistorias, alteração de perfil, etc.
Na pasta "pages" temos cada tela em React Native, na pasta "server" temos o back-end do projeto que se encontra em outro repositório (https://github.com/daylcn/back_encostai)

Ao clonar o projeto, é necessário utilizar "npm install" para instalar os pacotes de bibliotecas utilizadas no projeto.
Além disso, utilizamos a API do Google Maps para gerar um mapa na página de Pontos de Risco, então no arquivo app.json é preciso inserir a sua chave de API no lugar do texto entre aspas.
Também existem chamadas de API que estão utilizando o endereço IP 192.168.0.10, isso acontece pois quando se usa o Expo para abrir o projeto no celular ele acessa esse IP na rede para fazer as chamadas de API. Antes de rodar o projeto, rode um "ipconfig" no Windows ou "ifconfig" no Linux para pegar seu atual endereço IP e substitua as entradas do IP 192.168.0.10

Para rodar o projeto, execute "npx expo start" na pasta raiz do projeto e para que as chamadas de API funcionem, execute "node app.js" na pasta "server" após clonar o repositório do back-end.
