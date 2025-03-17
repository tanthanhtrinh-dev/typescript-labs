class Config {
    static readonly API_URL: string;
    static readonly TIMEOUT: number = 5000;

    static {
        //Config.API_URL = process.env.API_URL || "https://default-api.com";
        console.log("Static block executed!");
    }
}

class App {
    static {
        console.log("App class loaded!");
    }
}

class CountryCodes {
    static codes: { [key: string]: string } = {};

    static {
        CountryCodes.codes["US"] = "+1";
        CountryCodes.codes["UK"] = "+44";
        CountryCodes.codes["VN"] = "+84";
    }
}

export class StaticBlocksExample {

    constructor() {
        console.log("StaticBlocksExample constructor");
    }

    static Run = () => {
        console.log(Config.API_URL); // ✅ "https://default-api.com"
        console.log(Config.TIMEOUT); // ✅ 5000
    }

    static RunApp = () => {
        const app1 = new App(); // ✅ Logs: "App class loaded!"
        const app2 = new App(); // ❌ No additional logs (runs only once)
    }

    static RunCountryCodes = () => {
        
        //console.log(CountryCodes.codes[]); // ✅ { US: "+1", UK: "+44", VN: "+84" }
        
        console.log(CountryCodes.codes["VN"]); // ✅ "+84"

    }

}

