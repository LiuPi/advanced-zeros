function getNumberOfZeros(number, base){
    let p;
    let count;
    let k;
    let n = number;
    let num = n;
    let j = base;
    for (let i=2; i <= base; i++) {
        if (j % i == 0) {
            p = 0;
            while (j % i== 0) {
                p++;
                j /= i;
            }
            count = 0;
            k = n;
            while (k/i > 0) {
                count += Math.floor(k/i);
                k /= i;
            }
            num = Math.min(num, Math.floor(count/p));
        }
    }
    return Math.floor(num);
}

 module.exports = function getZerosCount(number, base) {
    return getNumberOfZeros(number,base);
};