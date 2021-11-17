import { Page } from "../po-model/gobal-component.po";
import LoginFlow from "./login.flow";
import { applyMixins, pipePromise, step } from "./utils";
import WarningFlow from "./warning.flow";

class BasicFlow<T extends Page>{
    constructor(public t: TestController, public page: T){}
    protected steps: Array< (t: TestController) => Promise<any>> =[];
    
    @step(
        {
            desc: 'description text',
            expected : 'expected text'
        })
    validateMethod(
        paramOne: string,
        paramTwo: number
    ):this | any {
         return async (t:any) => {
            const valOne = paramOne;
            const valTwo = paramTwo;
            await t.wait(2000);

         };   
    } 
    
    // async execute(){
    //     await this.t.maximizeWindow();
    //     try{
    //         // if (config.skipExecution =='false'){
    //         // const remainingSteps = this.steps.filter(s => !s['executed']); 
    //         // await pipePromise(...remainingSteps)(this.t);
    //     } catch (e) {
    //         // e.executedSteps = this.steps
    //         //     .filter(oneStep => oneStep['executed'])
    //         //     .reduce((acc, currStep)=> {
    //         //         const stepDesc = `  ** ${currStep.name['content']}, ${currStep.name['expected']}`;
    //         //         return acc + stepDesc + '\n';
    //         //     }, '');
    //         // e.steps = this.steps.map(aStep => aStep.name);
    //         throw e;        
    //     }
    //     return "abc" //this.steps.map(aStep => aStep.name);
    // }

}

interface BasicFlow<T> 
    extends LoginFlow<T>, 
            WarningFlow<T> {}
{    
}

applyMixins(BasicFlow, [
    LoginFlow,
    WarningFlow
]);

export default BasicFlow;