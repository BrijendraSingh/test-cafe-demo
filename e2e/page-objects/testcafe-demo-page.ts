import { Selector, t } from 'testcafe';
import { Page }  from './base-po';

export class TestCafeDemoPage extends Page {
    featureChbx: Selector;
    constructor() {
        super();
        this.featureChbx = Selector(`label input[type='checkbox']`);
    }

    async enterName(name:string) {
        await t 
            .typeText(this.nameInput, name);
    }

    async fillFeatureChbx(){
        const chbxCount = await this.featureChbx.count;
        for (let i=0; i< chbxCount; i++){
            await t.click(this.featureChbx.nth(i));
        }
    }

    async clickSubmitBtn(){
        await t.click(this.submitBtn);
    }
}

export default new TestCafeDemoPage();