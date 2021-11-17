import * as _ from 'lodash';

export function tFixture(name: any){
    return fixture(name).page('https://google.com').beforeEach( async t => {
        // console.log('before each');    
    });
}


export function tSteps(...args:any[]){
    const name  = reassembleTestName(args[0]);
    const sqlPath = args.length === 2  ? undefined : args[1];
    const testcase = args[args.length - 1];

    const testCtx = test(name , async t => {
        const expectedData = sqlPath ? await executeSql(sqlPath) : undefined;
        const steps = await testcase(t, expectedData);
        testCtx.meta({steps});
    });
return testCtx;

}


const reassembleTestName = (name:any) => {
    const sectionAndTitle = name.split('|');
    if (_.isEmpty(sectionAndTitle)){
        console.error('Please follow correct test name format: "SECTION_NAME | TEST_TITLE" or "SECTION_NAME | TEST_TITLE | TEST_ID"' );

    }
    return sectionAndTitle.join('|')
}

const executeSql = (sqlPath:any) => {
    return 'abc ' + sqlPath;
} 