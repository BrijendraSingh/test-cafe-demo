import { Selector } from "testcafe";

const getElementByXpath = Selector(xpath => {
    const iterator = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
        null
    );
    const items =[];
    let item = iterator.iterateNext();
    while(item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items; 
});

export default function (xpath:string) {
    return Selector(getElementByXpath(xpath));
}
