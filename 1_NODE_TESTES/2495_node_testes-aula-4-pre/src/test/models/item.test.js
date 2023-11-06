import Item from '../../models/itens.js'
import { describe, expect, it, jest } from '@jest/globals';


describe('Inicializando itens', ()=>{
    test.each([
        ['uva', 3.40, 4],
        ['maçã', 2.5, 1],
        ['laranja', 3.10, 2],
    ])('Deve adicionar frutas no carrinho', async (nome, valor, quantidade) => {
        const item = new Item(nome, valor, quantidade)
        console.log(item)
        expect(item.nome).toBe(nome);
        expect(item.valor).toBe(valor);
        expect(item.quantidade).toBe(quantidade)
    })
})