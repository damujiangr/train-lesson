function asy(p) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(p)
        }, 1000);
    });
}

async function readFiles() {
    const txt = await asy(1);
    console.log(txt)
    const txt2 = await asy(2);
    console.log(txt2)
};


readFiles();