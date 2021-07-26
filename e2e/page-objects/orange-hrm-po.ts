import { Selector, t } from 'testcafe';

class OrangeHrmPO {
    username : Selector;
    password : Selector;
    loginBtn : Selector;
    clickLeave : Selector;
    clickLeaveList : Selector;
    constructor (){
        this.username = Selector('#txtUsername');
        this.password = Selector('#txtPassword');
        this.loginBtn = Selector('#btnLogin');
        this.clickLeave =Selector('#menu_leave_viewLeaveModule');
        this.clickLeaveList = Selector('#menu_leave_viewLeaveList');
    }

    async login(uname:string, pword: string) {
        await t
            .typeText(this.username, uname)
            .typeText(this.password, pword)
            .click(this.loginBtn);          
    }

    async viewLeaveList(){
        await t.click(this.clickLeave);
        await t.click(this.clickLeaveList);
    }
}

export default new OrangeHrmPO();