//arquivo separado

const soma = (req, res) => {     //controller controla requisição e resposta
    const soma = 1 + 1;

    res.send({soma: soma});
};

module.exports = { soma }   //função module exports em sua maioria exporta um objeto

