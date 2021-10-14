// last task  (W01 D05) javaScript
// 1 
let num1 = 4;
let num2 = 3;
let num3 = 7;



// 2 (what larger than other)
if (num1 > num2) {
    console.log("The large number is first =  ",num1);
}
else if (num1 < num2) {
    console.log("The large number is second =  ",num2);
}
else{
    console.log('equal');
}



// 3 (even or odd)
if (num1 % 2 == 0) {
    console.log( num1 , "is even number");
    
}else{
    console.log(num1 ,'is odd number');
}



// 4 (sort -> large to small)
if (num1>num2 && num1>num3) {
    if (num2>num3) {
        console.log(num1 + ',' + num2 + ',' + num3);
        }
    else{
        console.log(num1 + ',' + num3 + ',' + num2);
    }
}
else if (num2>num1 && num2>num3 ) {
    if (num1>num3) {
        console.log(num2 + ',' + num1 + ',' + num3);
         }
    else{
        console.log(num2 + ',' + num3 + ',' + num1);
    }
}
else if (num3>num1 && num3>num2) {
    if (num1>num2) {
        console.log(num3 + ',' + num1 + ',' + num2);
        }
    else{
        console.log(num3 + ',' + num2 + ',' + num1);
    }
} 


// 5 (print numbers , posative number)
let amount = 6 ;
if ( typeof amount !== "number") {
    console.log("Please enter a number");
}else if (amount < 0) {
    console.log("Please enter a positive number");
}else{
    console.log('the number = ' , amount);
} 
 


// 6 (username , password)
let username = 'Rawan Bader';
let password = 'T4568_o098';
if (username.length > 6 ) {
    if(password.length >= 8){
    console.log('login successful');  
}
else{
console.log("login failed.");
}}



// 7  (0-20)
let i = 0;
while (i<=20) {
   
    console.log(i);
    i++;
} 


// 8 (20-0)
for (let n = 20; n >= 0; n--) {
   console.log(n);
    
} 



// 9 (even number)
for (let e = 1; e <= 20; e++) {
    if (e % 2 == 0) {
        console.log(e);   
    }
} 



// 10 (6,18)
let startRange = 6;
let endRange  = 18; 
for (let d = startRange; d <=endRange; d++) {
    console.log(d);    
}



// 11 (*)
for (let st = 1; st <= 5; st++) {
    console.log('*' . repeat(st));
} 