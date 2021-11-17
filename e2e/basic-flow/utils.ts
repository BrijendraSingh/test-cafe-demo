Object.defineProperty(RegExp.prototype, 'toJSON', {value:RegExp.prototype.toString});

export function step({desc, expected}: {desc:string; expected:string}){
    return function (
        target: object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const origionalMethod = descriptor.value;

        descriptor.value = function( ...args : any[]){
            const oneStep = origionalMethod.apply(this, args);
            let stepDesc = desc;
            let expectedDescContent = expected;
            args.forEach((val, idx)=>{
                stepDesc = stepDesc.replace(
                    new RegExp('{(' + idx + ')}', 'g'),
                    JSON.stringify(val) 
                );
                expectedDescContent = expectedDescContent.replace(
                    new RegExp('{(' + idx + ')}', 'g'),
                    JSON.stringify(val) 
                );
            });
            Object.defineProperty(oneStep, 'name', {
                value:{content: stepDesc, expected: expectedDescContent}, writable:false
            });
            this.steps.push(oneStep);
            return this;
        };
    };
}

let TEST_NUM=0;
const IS_CONCURRENT = process.argv.includes('-c');

export const pipePromise = (...fns: any[] ) => (x: any) => {
    logger.logCase(IS_CONCURRENT ? undefined : ++TEST_NUM);
    return fns.reduce(
        (p, fn) => 
            p.then( _ => {
                logger.logStep(fn.name.content , fn.name.expected);
                fn.executed = true;
                return fn(x);
            }),
        Promise.resolve()        
    );
};

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

const FONT_COLOR = {
    RESET: '\x1b[0m',
    RED: '\x1b[31m',
    MAGENTA: '\x1b[35m',
    GREY: '\x1b[37m',
    BLACK: '\x1b[30m',
    BLUE: '\x1b[34m',
    GREEN: '\x1b[32m'
}

export const logger ={
    log: (desc, obj) =>{
        console.log(
            `${FONT_COLOR.BLUE}%s${FONT_COLOR.GREEN}%s${FONT_COLOR.RESET}`,
            `${desc}`,
            JSON.stringify(obj)
        );
    },
    error : obj => {
        console.log(
            `${FONT_COLOR.RED}`,
            JSON.stringify(obj)
        );
    },
    logStep: (desc, obj) =>{
        console.log(
            `${FONT_COLOR.MAGENTA}%s%s%s%s${FONT_COLOR.RESET}`,
            '     * ',
            `${desc}`,
            ' ,',
            JSON.stringify(obj)
        );
    },
    logCase: (num?) =>{
        console.log(
            `${FONT_COLOR.BLUE}%s${FONT_COLOR.RESET}`,
            num ? `   Steps(${num}):`:` Steps:`
        );
    },

}