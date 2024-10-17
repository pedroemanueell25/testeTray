/// <reference types="cypress" />

import LoginPage from "../support/pages/loginPage"

describe('Teste E2E', () => {
    it('Cenario 1: Validar cadastro de usuario', () => {
        LoginPage.acessarAmbiente('cadastro')        
        LoginPage.preencherNome('Teste 1')
        LoginPage.preencherEmail('teste74578855@teste.com.br')
        LoginPage.preencherSenha('123456')
        LoginPage.cliqueBotaoCadastrar() 
        LoginPage.validarCadastroComSucesso()       
    });

    it('Cenario 2: Validar login com senha invalida', () => {
        LoginPage.acessarAmbiente('login')        
        LoginPage.preencherEmail('teste7457885@teste.com.br')
        LoginPage.preencherSenha('12345')
        LoginPage.cliqueBotaoEntrar()
        LoginPage.validarLoginSemSucesso()        
    });

    it('Cenario 3: Validar login com sucesso', () => {
        LoginPage.acessarAmbiente('login')        
        LoginPage.preencherEmail('teste7457885@teste.com.br')
        LoginPage.preencherSenha('123456')
        LoginPage.cliqueBotaoEntrar()
        LoginPage.validarLoginComSucesso()        
    });

    it('Cenario 4: Validar movimentação cadastrada', () => {
        LoginPage.acessarAmbiente('login')        
        LoginPage.preencherEmail('teste7457885@teste.com.br')
        LoginPage.preencherSenha('123456')
        LoginPage.cliqueBotaoEntrar()
        LoginPage.acessarAmbiente('movimentacao')
        LoginPage.preencherDtMovimentação('01/10/2024')
        LoginPage.preencherDtPagamento('01/10/2024')
        LoginPage.preencherDescricao('Teste')
        LoginPage.preencherInteressado('Teste Interessado')
        LoginPage.preencherValor()
        LoginPage.preencherConta()
        LoginPage.selecionaSituacaoPago()  
        LoginPage.cliqueBotaoSalvar()     
    });
});