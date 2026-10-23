const http = require("http");

const PORT = process.env.PORT || 4000;

function pagina(titulo, conteudo) {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${titulo} | Projeto Cloud</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 60px auto;
            padding: 0 24px;
            background: #f3f6fb;
            color: #202938;
        }
        nav {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 32px;
        }
        a { color: #245bc4; }
        main {
            background: white;
            padding: 32px;
            border-radius: 16px;
        }
        footer {
            margin-top: 24px;
            color: #586174;
        }
    </style>
</head>
<body>
    <nav>
        <a href="/">Início</a>
        <a href="/sobre">Sobre</a>
        <a href="/produtos">Produtos</a>
        <a href="/contato">Contato</a>
    </nav>
    <main>${conteudo}</main>
    <footer>Projeto de Desenvolvimento de Software em Nuvem</footer>
</body>
</html>`;
}

const rotas = new Map([
    ["/", {
        titulo: "Início",
        conteudo: "<h1>Bem-vindo à loja de Jorge Gabriel!</h1><p>Uma aplicação web feita com Node.js.</p>"
    }],
    ["/sobre", {
        titulo: "Sobre",
        conteudo: "<h1>Sobre o projeto</h1><p>Projeto acadêmico para praticar Node.js, Git, GitHub e publicação na nuvem.</p>"
    }],
    ["/produtos", {
        titulo: "Produtos",
        conteudo: "<h1>Nossos produtos</h1><ul><li>Teclado</li><li>Mouse</li><li>Monitor</li></ul>"
    }],
    ["/contato", {
        titulo: "Contato",
        conteudo: '<h1>Contato</h1><p>Desenvolvido por Jorge Gabriel.</p><a href="https://github.com/EuJorgyn">Meu GitHub</a>'
    }]
]);

const servidor = http.createServer((req, res) => {
    const caminho = req.url.split("?")[0];
    const rota = rotas.get(caminho);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (rota) {
        res.writeHead(200);
        res.end(pagina(rota.titulo, rota.conteudo));
    } else {
        res.writeHead(404);
        res.end(pagina("Não encontrado", "<h1>404 — Página não encontrada</h1>"));
    }
});

servidor.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
