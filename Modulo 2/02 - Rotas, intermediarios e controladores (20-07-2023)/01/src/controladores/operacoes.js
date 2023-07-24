const somar = (req, res) => {
    const { num1, num2 } = req.query;
    res.send(`${Number(num1) + Number(num2)}`);
};

const subtrair = (req, res) => {
    const { num1, num2 } = req.query;
    res.send(`${Number(num1) - Number(num2)}`);
};

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query;
    res.send(`${Number(num1) * Number(num2)}`);
};

const dividir = (req, res) => {
    const { num1, num2 } = req.query;
    res.send(`${Number(num1) / Number(num2)}`);
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
};
