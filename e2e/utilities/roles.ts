import { Role } from "testcafe";
import product  from "../page-objects/product-store";
import orangeHrmPO from "../page-objects/orange-hrm-po";

const testUser = Role('https://www.demoblaze.com', async t => {
    await product.login('test','test');
    }, {preserveUrl:true});


const adminUser = Role('https://www.demoblaze.com', async t => {
    await product.login('admin','admin');
    }, {preserveUrl:true});


const orangeUser = Role('https://opensource-demo.orangehrmlive.com', async t => {
    await orangeHrmPO.login('Admin', 'admin123');
    },{preserveUrl:true});    

export {testUser, adminUser, orangeUser};