import { ClientFunction } from "testcafe";


const getTime = ClientFunction(() => {
    return new Date().toString();
});

fixture`mock date`
    .clientScripts([
        { module: 'mockdate' },
        { content: 'MockDate.set("2020-01-01")' }
    ]);
test('mock date', async t => {
    console.log(':: mock date from client function :: ', await getTime());
    console.log(':: date without client function :: ', new Date().toString());
})


fixture`real date`
test('real time test', async t => {
    console.log(':: real date from client function (fixture without clientScripts ) :: ', await getTime())
    console.log(':: real date :: ', new Date().toString());
});