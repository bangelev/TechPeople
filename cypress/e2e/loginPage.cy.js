import Login from '../e2e/pageObject/login.js'

describe('login page', () => {
    const login = new Login()
    beforeEach(() => {
        cy.visit('/login')
    })
    it('gitHub login', () => {
        login.gitHubBtn().click()
    })
    it('google login', () => {
        login.googleBtn().click()
    })
})