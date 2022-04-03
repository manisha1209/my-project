const years = 1;
const startingBalance = 50000;
const Rate = 1;
console.log("Month\tEarned\tBalance");
let runningBalance=startingBalance;
let Earning = (startingBalance*1)/100;
console.log(Earning);
for (let month = 1; month <= years*12; month ++)
{
  Earning=(runningBalance*Rate)/100 
console.log(`${month }\t\t ${runningBalance}`);

}