/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import { somaHorasExtras, calculaDescontos, multiplicaDepoisDobra, statusAluno } from '../index.js';
// eslint-disable-next-line linebreak-style
describe('Testes dos calculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);
    expect(retornado).toBe(esperado);
  });

  it('Deve descontar o valor do Sálario', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);
    expect(retornado).toBe(esperado);
  });

  // pode ser assim ou como está acima
  test('Deve multiplicar dois valores entre si e depois retornar o dobro desse resultado', () => {
    const esperado = 60;
    const retornado = multiplicaDepoisDobra(10, 3);
    expect(retornado).toBe(esperado);
  });

  it('Deve retornar o status Aprovado', () => {
    const esperado = 'Aprovado';
    const retornado = statusAluno(6);
    expect(retornado).toBe(esperado);
  });

  it('Deve retornar o status Recuperação', () => {
    const esperado = 'Recuperacao';
    const retornado = statusAluno(5);
    expect(retornado).toBe(esperado);
  });

  it('Deve retornar o status Reprovado', () => {
    const esperado = 'Reprovado';
    const retornado = statusAluno(4);
    expect(retornado).toBe(esperado);
  });
});
