import { RequestLogger } from "testcafe"
import orangeHrmPO from "../../page-objects/orange-hrm-po";
import { orangeUser } from "../../utilities/roles";
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
    // .page('https://opensource-demo.orangehrmlive.com/')
    .beforeEach(async t=> {
        RequestLogger().clear;
        await t
            .navigateTo('https://opensource-demo.orangehrmlive.com/')
            .maximizeWindow()
            .useRole(orangeUser);
        // await orangeHrmPO.login('Admin','admin123');
    })
    .afterEach(async t=>{
        await orangeHrmPO.logout();
    });

test('get - eomployee data', async t=>{
    const res = await request('https://opensource-demo.orangehrmlive.com')
            .get('/index.php/pim/getEmployeeListAjax')
            .set('Cookie',requestLogger.requests[0].request.headers['cookie'])
            .send();
    console.log(res.status);
    console.log('view employee list', res.text);
    await t.expect(res.text).contains('Aaliyah Haq');
})
.requestHooks(requestLogger)
.meta({
    ID: 'test id',
    SEVERITY: 'bocker',
    STORY: 'story-id',
    TEST_RUN: 'test identifier'
});