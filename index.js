// Question 1

async function sendReminders(delayMessage){
    const DEFAULT = 3000;
    const message = delayMessage??DEFAULT;

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Reminder: You have tasks to finish today!!")
            resolve("Reminder sent to user!")
        }, message);
    })
}

(async () => {
    const result = await sendReminders();

    console.log(result)
})();



// Question 2 

async function checkServer() {
    return Math.random()<0.5? "Server is running" : Promise.reject("Server down");
}
    const intervalId = setInterval(() => {
        checkServer()
        .then(message => console.log("Good", message))
        .catch(error =>console.log("fail", error))
    }, 5000);
    
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped polling")
    }, 30000);
