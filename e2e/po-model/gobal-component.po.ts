import { Selector , t} from "testcafe"

export class Page{
 
    constructor(
        public elementOne? : Selector,
        public elementTwo? : Selector
    ){
        this.elementOne = Selector('.classOne');
        this.elementTwo = Selector('.classTwo');
    }
}