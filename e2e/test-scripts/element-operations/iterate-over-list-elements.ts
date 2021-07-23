import { Selector } from "testcafe";

fixture `Iterate over list element`
.page('https://devexpress.github.io/testcafe/example/');

test('iterate over list elements', async t=> {
    const checkboxes = Selector('legend')
        .withExactText('Which features are important to you:')
        .parent('fieldset')
        .find('label');

    //click checkboxes
    const checkboxEle = checkboxes.find('input');
    for (let idx=0; idx<await checkboxEle.count ; idx++){
        await t.click(checkboxEle.nth(idx));
    }    

    //read checkboxes texts
    for (let i = 0; i < await checkboxes.count; i++) {
        console.log("checkbox texts ->  " + await checkboxes.nth(i).textContent);
    }
});