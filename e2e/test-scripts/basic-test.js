import {Selector} from 'testcafe';

fixture `getting started`
.page `https://devexpress.github.io/testcafe/example/`

test('my first test', async t=>{

    const name = Selector('input#developer-name');
    await t
        .typeText(name, 'Brijendra')
        .click('button#submit-button');

});

