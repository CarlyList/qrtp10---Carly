function movieDiscountCalc (senior: boolean, vetOrRes: boolean, movieMemb: boolean) {
    if (senior && vetOrRes && movieMemb) return 0.25;
    if ((senior && movieMemb) || (vetOrRes && movieMemb) ) return 0.25;
    if (senior || vetOrRes) return 0.10;
    if (movieMemb) return 0/15;
    return 0
}

console.log("all three discount work", movieDiscountCalc (true, true, true));
console.log("senior & moviememb", movieDiscountCalc (true, false, true));
console.log("vets and resp workers", movieDiscountCalc(false, true, false))
console.log("movie members works", movieDiscountCalc(false, false, true))
console.log("no discount", movieDiscountCalc(false,false,false))

