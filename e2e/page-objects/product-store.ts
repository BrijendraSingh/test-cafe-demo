import { Selector, t } from "testcafe";

export class Product {
    nameOfUser: Selector;
    userName:Selector;
    password:Selector;
    loginBtn:Selector;
    loginLink:Selector;
    navLink: Selector;

    constructor () {
        this.nameOfUser = Selector('a#nameofuser');
        this.userName = Selector('input#loginusername');
        this.password = Selector('input#loginpassword');
        this.loginBtn = Selector('button').withText('Log in');
        this.loginLink = Selector('a#login2').withText('Log in');
        this.navLink= Selector('.nav-link')
    }

    async login(username:string, password:string){
        await t
            .click(this.loginLink)
            .typeText(this.userName, username)
            .typeText(this.password, password)
            .click(this.loginBtn)
            // .click(this.navLink.withText('Cart'));
        
    }

    async verifyUser(user:string) {

        const nou = this.nameOfUser.with({visibilityCheck:true}).innerText;
        await t.expect(nou).eql(`Welcome ${user}`);
    }
}

export default new Product();