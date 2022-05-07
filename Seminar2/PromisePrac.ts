const trueCondition: boolean = true;

const promise = new Promise(((resolve, reject) => {
    if (trueCondition) {
        resolve(`true`);
        return
    }
    reject("false!");
}));

promise.then((resolveData): void => {
    console.log(resolveData);
}).catch(error => console.log(error));

// promise chaining
const restaurant = ((callback: () => void, time: number) => {
    setTimeout(callback, time);
});

const order = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('order...');
            resolve('order~');
        }, 1000);
    });
}

const cook = (progress: string): Promise<string> => {
    return new Promise(((resolve, reject) => {
        console.log(`cooking...`);
        resolve(`${progress} cocking~`)
    }))
}

const serving = (progress: string): Promise<string> => {
    return new Promise(((resolve, reject) => {
        console.log(`serving...`);
        resolve(`${progress} serving~`)
    }))
}

order().then((progress: string) => cook(progress))
    .then((progress: string) => serving(progress))
    .then((progress: string) => console.log(progress));

Promise.resolve(123)
    .then(res => {
        throw new Error("error!!");
        return 456;
    }).then(res => {
    console.log(res);
}).catch(error => {
    console.log(error.message);
});
