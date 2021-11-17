import { Page } from "../po-model/gobal-component.po";
import { step } from "./utils";

class WarningFlow<T extends Page>{
    public page : T;

    @step({desc: 'login flow', expected: 'login flow expected'})
    getWarningMethod(): this|any {
        console.log('inside getWarningMethod ==');
        return async t  => {
           console.log('inside t await');
        //    console.log(' page ==>', this.page.elementOne);
        //    await t.wait(2000);
        };
    }
}

export default WarningFlow;