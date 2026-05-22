class LoginPage {

    constructor(page) {
        this.page = page;

        //this.loginLink = "//a[@id='login_Layer']";
        //this.loginLink = page.getByRole('link', { name: 'Login' });
        this.loginLink = '#login_Layer';
        this.email = "//input[@placeholder='Enter your active Email ID / Username']";
        this.password = "//input[@placeholder='Enter your password']";
        this.loginButton = "//button[@type='submit']";
        this.viewProfileButton = "//a[text()='View']";
        this.headlineEditButton = "//div[@class='widgetHead']/span[@class='edit icon'][1]";
        this.resumeHeadline = "//textarea[@name='resumeHeadline']";
        this.saveHeadlineButton = "//button[text()='Save']";
    }

    async openWebsite() {
        await this.page.goto('https://www.naukri.com');
    }

    async clickLogin() {
        await this.page.click(this.loginLink);
        //await this.page.click(this.loginLink);
    }

    async enterCredentials(email, password) {
        await this.page.fill(this.email, email);
        await this.page.fill(this.password, password);
    }

    async clickLoginButton() {
        await this.page.click(this.loginButton);
    }

    async clickViewProfileButton() {
        await this.page.click(this.viewProfileButton);
    }

    async clickHeadlineEditButton() {
        await this.page.click(this.headlineEditButton);
    }

    async clickSaveHeadingButton(){
        await this.page.click(this.saveHeadlineButton);
    }

}
module.exports = LoginPage;