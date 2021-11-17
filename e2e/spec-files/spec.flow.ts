import BasicFlow from "../basic-flow";
import { step } from "../basic-flow/utils";
import { LoginPage } from "../po-model/login.po";
import {t} from 'testcafe';

class AbcFlow extends BasicFlow<LoginPage> {
    constructor(public t: TestController){
        super(t, new LoginPage()); 
    }

    @step({
        desc: 'login flow test', 
        expected:'expected login flow'
    })
    loginABC(name: string): this|any {
        
            console.log('inside loginABC flow' + name); 
            this.page.loginMyApp();  
            return async (t: TestController) => {       
                await t.expect('abc').eql('abcq');  
            }  
    }

    @step({desc: 'login flow test', expected:'expected login flow'})
    logoutAbc(name: string): this|any {
        console.log('inside logout flow' + name);    
    }
}


export default AbcFlow;