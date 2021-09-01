import readline from "readline";

const getinput = (): Promise<string> => {
    return new Promise<string>(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("String to parse: ", str => {
            rl.close();
            return resolve(str);
        });
    });
};

export default getinput;
