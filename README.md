# Coffee Recipes

Coffee Recipes é um sistema para receitas de café com controle de cafeína que simula uma rede social onde cada usuário pode cadastrar suas receitas de café, incluindo título, descrição, ingredientes, quantidade de cafeína e modo de preparo. Os usuários podem pesquisar receitas, visualizar um feed com as receitas de todos os usuários e até curtir receitas.

## Padrão Utilizado
Nosso padrão de projeto utilizado foi Composite Pattern onde podemos observar no `RegisterRecipes` atua como um componente composto, 
que contém outros componentes como `Menu, Confirm, Sucess` e múltiplas instâncias de `IngredientInput`. Essa composição cria uma árvore 
de componentes onde `RegisterRecipes` é o nó raiz e os demais são nós filhos.

## Características

- Registro e autenticação do usuário
- Criação de receita com título, descrição, ingredientes, quantidade de cafeína e método de preparo
- Funcionalidade de pesquisa de receita
- Receitas curtidas e favoritas
- Visualizar um feed com todas as receitas dos usuários
- Design responsivo para diferentes dispositivos
