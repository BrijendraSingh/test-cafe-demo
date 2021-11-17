import { Page } from "../po-model/gobal-component.po";
import { step } from "./utils";

class WarningFlow<T extends Page>{
    public page : T;

    @step({desc: 'getWarningMethod flow', expected: 'getWarningMethod flow expected'})
    getWarningMethod(): this|any {
        return async t  => {
            console.log('inside getWarningMethod ==');
        //    console.log(' page ==>', this.page.elementOne);
        //    await t.wait(2000);
        };
    }
}

export default WarningFlow;