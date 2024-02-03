function calculateSupply(age, amountPerDay) {
    const maxAge = 85;
    totalAmount = Math.round((maxAge - age) * 365 * amountPerDay); 

    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}


calculateSupply(25, 2.5);
calculateSupply(30, 1.8);
calculateSupply(40, 3.2);
