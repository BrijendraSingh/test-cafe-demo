fixture `test controller fixture`
    .before(async ctx=>{
        ctx.dbName ="<<your DB name abc>>"
        console.log('before :: ', ctx.dbName);    
    })
    .beforeEach(async t=>{
        t.ctx.myName= "<<brijendra singh>>";
    })
    .after(async ctx => {
        console.log('ctx variable after ::  '+ ctx.dbName);    
    })
    .afterEach(async t=>{
        console.log('ctx variable defind in beforeEach is used in After Each test ::  '+ t.ctx.myName);
    })

test('Test One', async t => {
    console.log('ctx variable defind in beforeEach is used in test ->  '+ t.ctx.myName);
    
});     


test('Test Two', async t => {
    console.log('ctx variable defind in beforeEach is used in test ->  '+ t.ctx.myName);
    t.ctx.myName = "<<Prakash Singh>>"
    
});