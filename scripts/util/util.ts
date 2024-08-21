import type {
    BaseContract,
} from "ethers";
import {
    Log,
} from "@ethersproject/abstract-provider";
import {
    LogDescription,
} from "@ethersproject/abi";

export function parseLog<T extends BaseContract>(contract: T, eventName: string, logs: Log[]): LogDescription {
    for (const log of logs) {
        try {
            const logDescription = contract.interface.parseLog(log)
            if (eventName === logDescription.name) {
                return logDescription
            }
        } catch (err) {

        }
    }
    throw (new Error(`Event <${eventName}> not found.`))
}
