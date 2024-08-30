import fs from "fs";
import { network } from "hardhat";
import config from "./config.json";

let config1: any = (config as any)[network.name]

export default config1

export function saveConfig() {
    (config as any)[network.name] = config1
    fs.writeFile(
        __dirname + "/config.json",
        JSON.stringify(config, null, 4),
        function (err) {
            if (err) throw err;
        }
    );
}

