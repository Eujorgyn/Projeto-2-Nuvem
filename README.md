# Projeto de Desenvolvimento de Software em Nuvem

Aplicação web desenvolvida por Jorge Gabriel com Node.js.

Utiliza o modelo request-response: o navegador solicita uma rota e o servidor responde com uma página HTML.

## Executar localmente

É necessário ter Node.js instalado.

```bash
npm start
```

Acesse http://localhost:4000.

Não há dependências externas para instalar.

## Rotas

- `/` — Página inicial
- `/sobre` — Informações do projeto
- `/produtos` — Lista de produtos
- `/contato` — Informações de contato

Rotas inexistentes retornam uma página HTML com status 404.

## Publicação

Comando de inicialização: `npm start`.

O servidor utiliza a variável de ambiente PORT quando definida. Caso contrário, utiliza a porta 4000.

As publicações na AWS e no Railway serão realizadas durante as etapas do trabalho.
