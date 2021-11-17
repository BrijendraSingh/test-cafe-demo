import { Selector, t } from 'testcafe';

class OrangeHrmPage {
    username : Selector;
    password : Selector;
    loginBtn : Selector;
    clickLeave : Selector;
    clickLeaveList : Selector;
    clickMyLeave: Selector;
    welcome: Selector;
    logoutLink: Selector;
    constructor (){
        this.username = Selector('#txtUsername');
        this.password = Selector('#txtPassword');
        this.loginBtn = Selector('#btnLogin');
        this.clickLeave =Selector('#menu_leave_viewLeaveModule');
        this.clickLeaveList = Selector('#menu_leave_viewLeaveList');
        this.clickMyLeave = Selector('#menu_leave_viewMyLeaveList');
        this.welcome = Selector('#welcome');
        this.logoutLink = Selector('#welcome-menu a').withText('Logout')
    }

    async login(uname:string, pword: string) {
        await t
            .typeText(this.username, uname)
            .typeText(this.password, pword)
            .click(this.loginBtn);          
    }

    async viewLeaveList(){
        await t
            .click(this.clickLeave)
            .click(this.clickMyLeave)
            .click(this.clickLeaveList);
    }

    async viewLeaveListHover(){
        await t
            .hover(this.clickLeave)
            .hover(this.clickMyLeave)
            .click(this.clickLeaveList);
    }

    async logout(){
        await t
            .click(this.welcome)
            .click(this.logoutLink);
        
    }
}

export default new OrangeHrmPage();