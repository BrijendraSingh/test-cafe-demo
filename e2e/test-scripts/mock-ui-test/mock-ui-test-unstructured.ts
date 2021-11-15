import { RequestMock, Selector } from "testcafe";
import { getTime } from "../../utilities/helper";

const mockData = require('../../resources/book-store-mock-data.json');

const mock = RequestMock()
    .onRequestTo("https://demoqa.com/BookStore/v1/Books")
    .respond(mockData);   

fixture(`mock fixture`)
    .page('https://demoqa.com/').beforeEach(async t=> {
        await t.maximizeWindow();
    })

    test('without Request Mock', async t=> {
        await t 
        .click(Selector('h5').withText('Forms'))
        .click(Selector('.header-text').withText('Book Store Application'))
        .click(Selector('.text').withText('Book Store'))
        
        const bookNames = Selector('.mr-2').find('a');
        for(let i=0; i<await bookNames.count; i++){
              console.log('Origional book name ==>' + await bookNames.nth(i).innerText)  
        }
        
        console.log('current time is: '+ await getTime());
    });

    test('https://demoqa.com/ : with Request Mock', async t=> { 
        await t
            .click(Selector('h5').withText('Forms'))
            .click(Selector('.header-text').withText('Book Store Application'))
            .click(Selector('.text').withText('Book Store'))
            
            const bookNames = Selector('.mr-2').find('a');
            for(let i=0; i<await bookNames.count; i++){
                  console.log('Mocked book name ==> ' + await bookNames.nth(i).innerText)  
            }  
    }).requestHooks(mock);