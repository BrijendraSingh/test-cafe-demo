import  product  from "../../page-objects/product-store";
import { adminUser, testUser } from "../../utilities/roles";
import loginPage from "../../page-objects/product-store"

fixture`user role test`

test('Regular user test', async t=> {
     await t
        .navigateTo('https://www.demoblaze.com').maximizeWindow()
        .useRole(testUser);
     await product.verifyUser('test');
});   

test('Admin user test', async t=> {
    await t
        .navigateTo('https://www.demoblaze.com')
        .useRole(adminUser)
    await product.verifyUser('admin');
}).only;

test('login' , async t=>{
    await t.navigateTo('https://www.demoblaze.com').maximizeWindow();
    await loginPage.login('test', 'test');
    await loginPage.verifyUser('test');
})