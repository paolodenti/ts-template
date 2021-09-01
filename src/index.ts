import getinput from "./readiniput";

const main = async () => {
    const input = await getinput();
    console.log(input);
};

main().catch(error => {
    console.log(error);
});
