// funcao a ser testada
const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;
// funcao a ser testada
const calculaDescontos = (salario, descontos) => salario - descontos;

const multiplicaDepoisDobra = (valor1, valor2) => (valor1 * valor2) * 2;

const statusAluno = (valor) => {
  if (valor <= 4) {
    return 'Reprovado';
  } if (valor < 6) {
    return 'Recuperacao';
  }
  return 'Aprovado';
};

export {
  somaHorasExtras,
  calculaDescontos,
  multiplicaDepoisDobra,
  statusAluno,
};

/*
const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assercoes;
};

// bloco de teste
const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou`);
  } catch (err) {
    console.error(`${titulo} não passou!!!`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
*/
