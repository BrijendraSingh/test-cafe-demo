fixture `ctx test`
    .beforeEach(async t=>{
        t.ctx.myName= "brijendra singh";
    });

test('use variables on test', async t => {
    console.log('ctx variable defind in beforeEach is used in test ->  '+ t.ctx.myName);
});     