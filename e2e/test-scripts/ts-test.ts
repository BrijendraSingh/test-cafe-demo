import testCafeBasePage from '../page-objects/base-po';
import testCafeDemoPage  from '../page-objects/testcafe-demo-page';

const devName = 'Brijendra Singh';
fixture('type script basic test')
    .page('https://devexpress.github.io/testcafe/example/');

    test('basic test one - Page Object', async t => {          
        await testCafeBasePage.submitName(devName);
        const hname =await testCafeBasePage.readEndNote();
        await t.expect(hname).eql(`Thank you, ${devName}`);
    });

    test('basic test two - Page Object inheritance', async t=> {
        await testCafeDemoPage.enterName(devName);
        await testCafeDemoPage.fillFeatureChbx();
        await testCafeDemoPage.clickSubmitBtn();
        const hname = await testCafeBasePage.readEndNote();
        await t.expect(hname).eql(`Thank you, ${devName}!`);
    });