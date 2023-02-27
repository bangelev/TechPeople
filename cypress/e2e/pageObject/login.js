class Login {
    email() {
        return cy.getBySel('email-input')
    }
    password() {
        return cy.getBySel('password-input')
    }
    loginBtn() {
        cy.getBySel('login-btn')
    }
    googleBtn() {
        return cy.getBySel('google-login-btn')
    }
    gitHubBtn() {
        return cy.getBySel('gitHub-login-btn')
    }
}

export default Login