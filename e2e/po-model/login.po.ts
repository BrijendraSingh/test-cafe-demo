import { Selector } from "testcafe";
import { Page } from "./gobal-component.po";

export class LoginPage extends Page {
    constructor(){
        super();
        this.grid = Selector('.class');
    }

    public grid : Selector;
    
    async loginMyApp(){
        console.log('login in my app --- WOW');
    } 

}