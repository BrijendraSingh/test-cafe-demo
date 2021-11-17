Object.defineProperty(RegExp.prototype, 'toJSON', {value:RegExp.prototype.toString});

export function step({desc, expected}: {desc:string, expected:string}){
    return function (
        target: object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const origionalMethod = descriptor.value;

        descriptor.value = function (...args: any[]){
            const oneStep = origionalMethod.apply(this, args);
            let stepDesc = desc;
            let expectedDescContent = expected;
            args.forEach((val, idx)=>{
                stepDesc = stepDesc.replace(
                    new RegExp('{('+idx+')}', 'g'),JSON.stringify(val) 
                );
                expectedDescContent = expectedDescContent.replace(
                    new RegExp('{('+idx+')}', 'g'),JSON.stringify(val) 
                );
            });
            // Object.defineProperty(oneStep, 'name', {
            //     value:{content: stepDesc, expected: expectedDescContent}, writable:false
            // });
            this.steps.push(oneStep);
            return this;
        };
    };
}

let TS_NUM=0;
const IS_CONCURRENT = process.argv.includes('-c');
export const pipePromise = (...fns: any[] ) => (x: any) => {
    console.log(IS_CONCURRENT ? undefined : ++TS_NUM);
    return fns.reduce(
        (p, fn) => 
            p.then( (_:any) => {
                console.log(fn.name.content , fn.name.expected);
                fn.executed = true;
                return fn(x);
            }),
        Promise.resolve()        
    );
}

export const applyMixins = (derivedCtor: any , baseCators: any[]) => {
    baseCators.forEach( baseCator => {
        Object.getOwnPropertyNames(baseCator.prototype).forEach(name => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCator.prototype, name)
            );
        });
    });
}