/// <reference types="cypress" />

describe('Validar teste de API', () => {
    it('1 - Validar formato da request', () => {
        cy.request("GET", "https://swapi.dev/api/films").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('count')
            expect(response.body).to.have.property('next')
            expect(response.body).to.have.property('previous')
            expect(response.body).to.have.property('results')          
        })      
        
    });

    it('2 - Validar retornos para URLs inválidas', () => {
        cy.request({url: "https://swapi.dev/api/?format=jsonx", failOnStatusCode: false}).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.equal({ detail: "Not found"})
                      
        })      
        
    });

    it('3 - Validar se o filme 10 existe e qual o tipo de retorno ao consultar', () => {
        cy.request("GET", "https://swapi.dev/api/films").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('results')

            const filme = response.body.results.find(f => f.episode_id === 10)
            expect(filme).to.be.undefined
        })
        
    });    

    it('4 - Validar se o filme 2 existe e qual o tipo de retorno ao consultar', () => {
        cy.request("GET", "https://swapi.dev/api/films").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('results')

            const filme = response.body.results.find(f => f.episode_id === 2)
            expect(filme).to.not.be.undefined
            expect(filme.episode_id).to.eq(2)
        })
        
    });

    it('5 - Validar o nome correto de um determinado episódio de filme', () => {
        cy.request("GET", "https://swapi.dev/api/films").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('results')

            const filme = response.body.results.find(f => f.episode_id === 4)
            expect(filme).to.not.be.undefined
            expect(filme.title).to.eq('A New Hope')
        })
        
    });

    it('6 - Validar o ID do episódio e se o tipo do dado está correto', () => {
        cy.request("GET", "https://swapi.dev/api/films").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('results')

            const filme = response.body.results.find(f => f.episode_id === 1)
            expect(filme.episode_id).to.be.a('number')
        })
        
    });

    it('7 - Validar o formato de data válida (padrão americano)', () => {
        cy.request("GET", "https://swapi.dev/api/films").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('results')

            const filme = response.body.results.find(f => f.episode_id === 4)
            expect(filme.release_date).to.match(/^\d{4}-\d{2}-\d{2}$/)
        })
        
    });

    it('8 - Validar o peso e a altura do “people” C-3PO e validar pelo menos um filme que ele tenha participado', () => {
        cy.request("GET", "https://swapi.dev/api/people").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('results')

            const pessoa = response.body.results.find(p => p.name === 'C-3PO')
            expect(pessoa).to.not.be.undefined
            expect(pessoa.height).to.eq('167')
            expect(pessoa.mass).to.eq('75')
            expect(pessoa.films).to.be.an('array').that.includes('https://swapi.dev/api/films/3/')
        })
        
    })
});