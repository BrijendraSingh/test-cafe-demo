import { Role, Selector } from "testcafe";
import product  from "../page-objects/product-store";

const testUser = Role('https://www.demoblaze.com', async t => {
    await product.login('test','test');
    }, {preserveUrl:true});


const adminUser = Role('https://www.demoblaze.com', async t => {
    await product.login('admin','admin');
    }, {preserveUrl:true});

export {testUser, adminUser};