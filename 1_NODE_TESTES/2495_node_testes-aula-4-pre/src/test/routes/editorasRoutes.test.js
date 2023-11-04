import app from '../../app.js'
import request from 'supertest'
//hooks sao ganchos que ajudao nos testes

let server;

beforeEach(()=>{
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
})

describe("GET em /editoras", () => {
    it('Deve retornar uma lista de editoras', async () =>{
        const resposta = await request(app)
            .get('/editoras')
            .set('Accept', 'application/json') // verifica as informações que vem pelo header
            .expect('content-type',  /json/)
            .expect(200);

        expect(resposta.body[0].email).toEqual('e@e.com');
    });
});

let idResposta;
describe("POST em /editoras", ()=>{
    it('Deve adicionar uma nova editora', async ()=>{
       const resposta =  await request(app)
                .post('/editoras')
                .send({
                    nome: "CDC",
                    cidade: "São Paulo",
                    email: "S@S.com"
                })
                .expect(201);
        idResposta = resposta.body.content.id;
    });

    it("Deve não adicionar nada ao passar o body vazio", async()=>{
        await request(app)
                .post('/editoras')
                .send({})
                .expect(400);
    });
    
});

describe("PUT EM /editoras/id", ()=>{
    it("Deve alterar o campo nome", async ()=>{
        await request(app)
            .put(`/editoras/${idResposta}`)
            .send({nome: `Casa do Código`})
            .expect(204);
    })
});

describe('DELETE /editoras/id', () => {
    it("Deletar o recurso adiconado", async () => {
        await request(app)
                .delete(`/editoras/${idResposta}`)
                .expect(200)
    })
})

describe('GET em /editoras/id', () => {
    it("Buscar tetornar o recurso selecionado", async () => {
        await request(app)
                .get(`/editoras/${idResposta}`)
                .expect(200)
    })
})


