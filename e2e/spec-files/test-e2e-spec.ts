import { tFixture, tSteps } from "../utilities/utils";
import AbcFlow from "./spec.flow"

tFixture `abc feature`

tSteps('abc test description', async t => {
    return await new AbcFlow(t)   
    .loginABC(' **login message** ')  
    .logoutAbc(' == logout ==')
    .getWarningMethod()
    .loginMethod()
    .execute();          
})