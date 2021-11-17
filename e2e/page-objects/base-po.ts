import { Selector, t } from "testcafe";

export class Page {
        nameInput: Selector;
        submitBtn: Selector;
        articleHeader : Selector;
        
        constructor () {
            this.nameInput =  Selector('#developer-name');
            this.submitBtn = Selector('#submit-button');
            this.articleHeader = Selector('.result-content').find('h1');
        }

        async submitName (name:string) {
            await t
                .typeText(this.nameInput, name)
                .click(this.submitBtn);
        }

        async readEndNote() {
            return  this.articleHeader.innerText;
        }


}

export default new Page();