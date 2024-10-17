class LoginPage {

//-----------------Login----------------------------//

    acessarAmbiente(ambiente) {
        cy.visit(Cypress.config().baseUrl + `${ambiente}`)        
    }

    preencherNome(nome) {
        cy.get('#nome')
            .type(nome)
    }

    preencherEmail(email) {
        cy.get('#email')
            .type(email)
    }

    preencherSenha(senha) {
        cy.get('#senha')
            .type(senha)
    }

    cliqueBotaoCadastrar() {
        cy.get('input[value="Cadastrar"]')
            .click()
    }

    cliqueBotaoEntrar() {
        cy.xpath('//*[text()="Entrar"]')
            .click()
    }

//-----------------Movimentação----------------------------//

    preencherDtMovimentação(dtMovimentacao){
        cy.get('#data_transacao')
            .type(dtMovimentacao)
    }

    preencherDtPagamento(dtPagamento) {
        cy.get('#data_pagamento')
            .type(dtPagamento)
    }

    preencherDescricao(descricao) {
        cy.get('#descricao')
            .type(descricao)
    }

    preencherInteressado(interessado) {
        cy.get('#interessado')
            .type(interessado)
    }

    preencherValor() {
        cy.xpath('//*[text()="Valor"]')
            .get('#valor')
                .type('200')
    }

    preencherConta() {
        cy.get('select#conta').then($select => {
            const options = `
              <option value="">Selecione uma conta</option>
              <option value="corrente">Conta Corrente</option>
            `;
            $select.append(options); // Adiciona as opções ao select
          });
          cy.get('select#conta').select('Conta Corrente'); // Seleciona a "Conta Poupança"
    }

    selecionaSituacaoPago() {
        cy.xpath('//*[text()="Pago"]')
            .click()
    }
    
    cliqueBotaoSalvar() {
        cy.xpath('//*[text()="Salvar"]')
            .click()
    }



//-----------------Validação Movimentação------------------//

    validarCadastroComSucesso() {
        cy.xpath('//*[text()="Usuário inserido com sucesso"]')
            .should('be.visible')
    }

    validarLoginSemSucesso() {
        cy.xpath('//*[text()="Problemas com o login do usuário"]')
            .should('be.visible')
    }

    validarLoginComSucesso() {
        cy.xpath('//*[text()="Bem vindo, Teste 1!"]')
            .should('be.visible')
    }

//-----------------Validação Movimentação------------------//

}

export default new LoginPage()