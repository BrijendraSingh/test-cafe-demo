import moment =require("moment");


export async function getTime(){
    return moment.now();
}