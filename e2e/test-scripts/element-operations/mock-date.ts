import { ClientFunction } from "testcafe";

fixture `mock date`
    .clientScripts([
        {module:'mockdate'},
        {content:'MockDate.set("2020-01-01")'}
    ]);

const getTimeStamp = ClientFunction(()=>{
    return new Date().toString();
    ;
});

test ('mock date', async t=> {
    console.log('mock date -> ' + getTimeStamp());
})