function factorial(n) {
    return new Promise((resolve) => {
        setTimeout(() => {

            if(n<0){
                throw new Error("Wywaliło się z rowerka bo mniejsze niż zero");
        
            }
            else if (n === 0 || n===1){
                resolve(1);
            } 
            else {
                let result = 1;
                for(let i=n; i>1; i--){
                result *= i;
                }
                resolve(result);
            }
    }, 0);
});
}
module.exports = { factorial } ;