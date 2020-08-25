export class Environment {

    issuer() {
        if (window["env"]["issuer"] !== '${ISSUER}')  {
            return window["env"]["issuer"]
        }
        else {
            return "https://sso.tomya.com"
        }
    }

}
