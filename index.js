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