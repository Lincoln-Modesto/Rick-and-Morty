<div style="display: flex">

![](/src/assets/imgs/logo.png)
</div>

# Rick And Morty - Lincoln Modesto

[Documentação oficial Vue 3](https://vuejs.org/guide/introduction.html)

- O projeto foi construído com o vue create app, utilizando o Vue 3 e sua estrutura Single File Component;
- Utiliza Typescript para melhor legibilidade e manutenção;

# API

- [API em GraphQL da série Rick and Morty](https://rickandmortyapi.com/documentation/)

## Features

- [x] Listagem de personagens;
- [x] Paginação;
- [x] Página de visualização dos detalhes do personagem;
- [x] Input de busca de personagens;
- [x] Responsividade;
- [ ] Testes e2e.

## Principais dependências instaladas:

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Bootstrap 5](https://getbootstrap.com)
- [Cypress](https://www.cypress.io)
- [EsLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Tiny-typed-emitter](https://github.com/binier/tiny-typed-emitter)
- [Vue-Router](https://router.vuejs.org)
- [Vue-Toastification](https://github.com/Maronato/vue-toastification)

## O projeto contém a seguinte estrutura de pastas:
```
├── cypress
├── node_modules
├── public
└── src
    ├── assets
    ├── common  
    ├── components
    │   ├── BaseCard.vue
    │   └── BaseInput.vue
    │
    ├── hooks
    ├── interfaces
    │   └── types
    ├── pages
    ├── router
    ├── services
    └── store
        └── modules

```

## Instalação
Utilize preferencialmente o **npm** para as instalações e scripts.

```
npm install
```

### Desenvolvimento
```
npm run serve
```

### Produção
```
npm run build
```

### Testes end-to-end com o Cypress
```
npm run test
```

### Lint
```
npm run lint
```

## Demo

![](/src/assets/imgs/example.png)
