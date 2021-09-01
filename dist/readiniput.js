"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const getinput = () => {
    return new Promise(resolve => {
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("String to parse: ", str => {
            rl.close();
            return resolve(str);
        });
    });
};
exports.default = getinput;
//# sourceMappingURL=readiniput.js.map