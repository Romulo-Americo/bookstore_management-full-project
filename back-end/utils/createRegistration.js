

const createRegistration = () =>{
    let numbers = "";
    for (let i = 0; i < 6; i++) {
        numbers += Math.floor(Math.random() * 10);
    }
    let digit = Math.floor(Math.random() * 10);
    let registration = numbers.substring(0, 3) + '.' + numbers.substring(3, 6) + '-' + digit;
    return registration;
}

module.exports = createRegistration;