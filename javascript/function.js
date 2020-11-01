(()=>{

    const two = 2

    const multiplyArrow = (a) => {
        return a * two
    }

    function multiply(a) {
        return a * two
    }

    console.log(`multiply arrow function => ${multiplyArrow(5)}`)

    console.log(`multiply normal function => ${multiply(5)}`)

})();