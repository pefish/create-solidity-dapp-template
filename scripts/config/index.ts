import config from "./config";

let config1: any = {}

if ((process.env["ENV"] as string).toLowerCase() === "local") {
    config1 = config.local
} else if ((process.env["ENV"] as string).toLowerCase() === "prod") {
    config1 = config.prod
}

export default config1
