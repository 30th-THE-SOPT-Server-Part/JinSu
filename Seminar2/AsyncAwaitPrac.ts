const asyncFunc1 = (msg: string): Promise<string> => {
    return new Promise<string>(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc1 - ${msg}`);
        }, 1000);
    });
};

const asyncFunc2 = (msg: string): Promise<string> => {
    return new Promise<string>(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`);
        }, 1500);
    });
};

const asyncMain = async (): Promise<void> => {
    let result = await asyncFunc1('hi');
    console.log(result);
    result = await asyncFunc2('hello');
    console.log(result);
};

asyncMain();