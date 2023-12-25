const callMe1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('callMe1')
        }, 0);
        
    })
}

const callMe2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('callMe2')
        }, 2);
        
    })
}

const callMe3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject('callMe3')
        }, 2);
        
    })
}

const callMeBefore =async () => {
    try {
        await callMe1()
        callMe2().then(async (data) => {
            try {
                
                console.log('success:', data);
                await callMe3()
            } catch (error) {
                console.log('error3', error);
            }
        }).catch((error) => {
            console.log('error2', error);
        })
    } catch (error) {
        console.log('error1', error);
    }
}

callMeBefore()