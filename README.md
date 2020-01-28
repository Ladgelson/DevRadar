# DevRadar

Aplicação para busca de desenvolvedores que sabem determinada tecnologia num raio de 10km. Aplicação criada usando a **stack Javascript, usando NodeJS para backend, ReactJS para frontend web e React-Native para Mobile**.

- Mobile

Abaixo segue as imagens do frontend mobile, onde existe um campo de pesquisa, e se houver um desenvolvedor que se cadastrou no frontend web e está a até 10km de distancia desse ponto, será mostrado. 

| ![WhatsApp Image 2020-01-28 at 10 53 19](https://user-images.githubusercontent.com/45443883/73270766-1cbd9680-41be-11ea-8f59-a6920d4af428.jpeg) | ![WhatsApp Image 2020-01-28 at 10 53 19 (1)](https://user-images.githubusercontent.com/45443883/73296890-4fc94f80-41e9-11ea-8568-f626495be029.jpeg) | ![WhatsApp Image 2020-01-28 at 16 11 44](https://user-images.githubusercontent.com/45443883/73296993-80a98480-41e9-11ea-9f97-301ff8fde17f.jpeg)

- API 

A API usa ajax para requisitar os dados a API do github, coletando dados como username, o link do avatar do usuário, a biografia e etc. Os dados são armazenados usando MongoDB, e salvos online no Mongo Atlas. A API também conta com um websocket para que quando um seja pesquisado tecnologia, e se um novo desenvolvedor com a mesma technologia, o mesmo possa ser atualizado automáticamente, coisa que não é possivel apenas com os metodos GET, SET, POST, UPDATE de uma API REST.
Também são usadas dependencias como: cors, dotenv, express, mongoose, nodemon e socket.io para que a aplicação funcione normalmente. 

- Web 

![Capturar](https://user-images.githubusercontent.com/45443883/73297231-f150a100-41e9-11ea-8fff-1b8f7bddc0a7.PNG)



