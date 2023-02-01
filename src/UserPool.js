import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_OehvOOVP1",
    ClientId: "5s74k7l07cb23p10egsrff3tbd"
}

export default new CognitoUserPool(poolData);