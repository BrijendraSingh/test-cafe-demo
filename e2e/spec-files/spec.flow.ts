import BasicFlow from "../basic-flow";
import { step } from "../basic-flow/utils";
import { LoginPage } from "../po-model/login.po";

class AbcFlow extends BasicFlow<LoginPage> {
    constructor(public t: TestController){
        super(t, new LoginPage()); 
    }

    @step({
        desc: 'loginABC flow test', 
        expected:'expected loginABC flow'
    })
    loginABC(name: string): this|any {
        return async (t: TestController) => {       
            this.page.loginMyApp();
            await t.expect('abc').eql('abc');  
        }  
    }

    @step({desc: 'logoutAbc flow test', expected:'expected logoutAbc flow'})
    logoutAbc(name: string): this|any {
        return async t => {
            console.log('inside logoutAbc flow' + name); 
        }  
    }
}


export default AbcFlow;