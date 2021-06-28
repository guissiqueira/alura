const customExpress = require("./config/customExpress");
const Tabelas = require("./database/tabelas");
const conexao = require("./database/conexao");

conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("conectado com sucesso");

        Tabelas.init(conexao);

        const app = customExpress();

        app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
    }
});