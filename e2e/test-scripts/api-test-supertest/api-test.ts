import { RequestLogger } from "testcafe"
import orangeHrmPO from "../../page-objects/orange-hrm-po";
const request = require('supertest');

const requestLogger : RequestLogger = RequestLogger(
    /employeeDistribution/,
    {
        logRequestHeaders: true,
        logRequestBody:true,
        logResponseHeaders:true,
        logResponseBody:true
    }
);

fixture `supertest api test`
    .page('https://opensource-demo.orangehrmlive.com/')
    .beforeEach(async ()=> {
        RequestLogger().clear;
    });
    
test('get - eomployee data', async t=>{
    await orangeHrmPO.login('Admin','admin123');
    await orangeHrmPO.viewLeaveList();
    console.log('requestLogger -->');
    console.log(requestLogger.requests[0].request.headers['cookie']);


    //super test
    const res = await request('https://opensource-demo.orangehrmlive.com')
            .post('/index.php/pim/getEmployeeListAjax?required_permissions={%22action%22:[%22view_leave_list%22]}')
            .set('Cookie',requestLogger.requests[0].request.headers['cookie'])
            .send();
    console.log(res.status);
    await t.expect(res.text).contains('Aaliyah Haq');
}).requestHooks(requestLogger);