import { Selector, t } from "testcafe";

export class Product {
    nameOfUser: Selector;
    userName:Selector;
    password:Selector;
    loginBtn:Selector;
    loginLink:Selector;

    constructor () {
        this.nameOfUser = Selector('a#nameofuser');
        this.userName = Selector('input#loginusername');
        this.password = Selector('input#loginpassword');
        this.loginBtn = Selector(`button[type='button']`);
        this.loginLink = Selector('a#login2');
    }

    async login(username:string, password:string){
        await t
            .click(this.loginLink)
            .typeText(this.userName, username)
            .typeText(this.password, password)
            .click(this.loginBtn.withText('Log in'));
        
    }

    async verifyUser(user:string) {
        const nou = this.nameOfUser.innerText;
        await t.expect(nou).eql(`Welcome ${user}`);
    }
}

export default new Product();