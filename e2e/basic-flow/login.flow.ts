import { Page } from "../po-model/gobal-component.po";
import { step } from "./utils";

class LoginFlow<T extends Page>{
    public page: T;

    @step({desc: 'login flow', expected: 'login flow expected'})
    loginMethod(): this|any {
        console.log('inside loginMethod ** ');
        return async (t:any)  => {
           console.log('inside t await ** ');
           this.page.elementTwo;
           await t.wait(2000);
        };
    }
}

export default LoginFlow;