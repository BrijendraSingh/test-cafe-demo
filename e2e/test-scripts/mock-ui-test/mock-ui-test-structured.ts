import { RequestMock, Selector } from "testcafe";
import bookStorePage from '../../page-objects/book-store-application-po'

const mockData = require('../../resources/book-store-mock-data.json');

const mock = RequestMock()
    .onRequestTo("https://demoqa.com/BookStore/v1/Books")
    .respond(mockData);   

fixture(`Structured UI mock fixture`)
    .page('https://demoqa.com/')

    test('Mock data in Book Store Application', async t=> { 
        await t
            .maximizeWindow()
    
            .click(bookStorePage.getTab('Forms'))
            .click(bookStorePage.getLeftPanel('Book Store Application'))
            .click(bookStorePage.getSubLeftPanel('Book Store'))
            
            // await bookStorePage.openBookStore();
            
            const bookNames = bookStorePage.book_names;
            for(let i=0; i<await bookNames.count; i++){
                  console.log('Mocked book name ==> ' + await bookNames.nth(i).innerText)  
            }  
    }).requestHooks(mock);