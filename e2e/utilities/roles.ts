import { Role, Selector } from "testcafe";
import product  from "../page-objects/product-store";

const testUser = Role('https://www.demoblaze.com/index.html', async t => {
    await product.login('test','test');
});


const adminUser = Role('https://www.demoblaze.com/index.html', async t => {
    await product.login('admin','admin');
    await product.verifyUser('admin');
});

export {testUser, adminUser};