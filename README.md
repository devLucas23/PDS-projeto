# Coffee Recipes

Coffee Recipes é um sistema para receitas de café com controle de cafeína que simula uma rede social onde cada usuário pode cadastrar suas receitas de café, incluindo título, descrição, ingredientes, quantidade de cafeína e modo de preparo. Os usuários podem pesquisar receitas, visualizar um feed com as receitas de todos os usuários e até curtir receitas.
## Padrão Utilizado
Nosso padrão de projeto utilizado foi Composite Pattern onde podemos observar no RegisterRecipes atua como um componente composto, 
que contém outros componentes como Menu, Confirm, Sucess e múltiplas instâncias de IngredientInput. Essa composição cria uma árvore 
de componentes onde RegisterRecipes é o nó raiz e os demais são nós filhos.

##Tecnologias Utilizadas

- React.js
- Axios: ^1.6.7
- jwt-decode: ^4.0.0
- React Icons: ^5.0.1
- Sass: ^1.70.0
- SweetAlert2: ^11.10.4

##Características

- Registro e autenticação do usuário
- Criação de receita com título, descrição, ingredientes, quantidade de cafeína e método de preparo
- Funcionalidade de pesquisa de receita
- Receitas curtidas e favoritas
- Visualizar um feed com todas as receitas dos usuários
- Design responsivo para diferentes dispositivos

##Uso

1. Bifurcar o repositório
2. Crie um novo branch para seu recurso ou correção de bug: git checkout -b feature-name
3. Faça suas alterações e cmmit: git commit -am 'Add new feature'
4. envie para a branch git push origin feature-name
5. envie um pull request com uma descrição clara de suas alterações.

##Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

Reutilizamos um projeto e fizemos algumas atualizações.
