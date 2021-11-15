import { Selector, t } from "testcafe";

class BookStorePage {
    tab_link : Selector;
    left_panel_link: Selector;
    left_panel_sub_link: Selector;
    book_names: SelectorAPI;

    constructor(){
        this.tab_link = Selector('h5');
        this.left_panel_link = Selector('.header-text');
        this.left_panel_sub_link = Selector('.text');   
        this.book_names = Selector('.mr-2').find('a')
    }

    getTab(tabname:string){
       return this.tab_link.withText(tabname);  
    }
    getLeftPanel(header:string){
        return this.left_panel_link.withText(header);  
     }
     getSubLeftPanel(subHeader:string){
        return this.left_panel_sub_link.withText(subHeader);  
     }

     async openBookStore(){
         await t
            .click(this.getTab('Forms'))
            .click(this.getLeftPanel('Book Store Application'))
            .click(this.getSubLeftPanel('Book Store'))    
     }
}

export default new BookStorePage();
