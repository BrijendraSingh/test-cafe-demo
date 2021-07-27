import xpathSelector from "../../utilities/xpath-selector"

fixture `xpath selector`
.page('https://devexpress.github.io/testcafe/example/')

test('xpath selector test', async t => {
const firstCheckbox = xpathSelector('//input[@type="checkbox"]');
const secondCheckbox = xpathSelector('//input[@type="checkbox"]').nth(1);

await t
    .click(firstCheckbox)
    .click(secondCheckbox);

for (let i=0; i<await firstCheckbox.count; i++){
    await t.click(firstCheckbox.nth(i));
}    
});