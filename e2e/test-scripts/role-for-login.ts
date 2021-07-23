import  product  from "../page-objects/product-store";
import { adminUser, testUser } from "../utilities/roles";


fixture`user role test`
    .page('https://www.demoblaze.com/index.html')

test('Regular user test', async t=> {
     await t
         .useRole(testUser)
     await product.verifyUser('test');
});   

test('Admin user test', async t=> {
    await t
        .useRole(adminUser)
    await product.verifyUser('admin');
});