import { Page } from "../po-model/gobal-component.po";
import { step } from "./utils";

class LoginFlow<T extends Page>{
    public page: T;

    @step({desc: 'loginMethod flow', expected: 'loginMethod flow expected'})
    loginMethod(): this|any {
        return async (t:any)  => {
           console.log('inside t await ** ')
           await t
            .wait(2000)
            // .click(this.page.elementTwo)
            // .expect(12).gte(13)
            ;

        };
    }
}

export default LoginFlow;