const number1ele = document.getElementById('num1') as HTMLInputElement;
const number2ele = document.getElementById('num2') as HTMLInputElement;
const mybtnele = document.querySelector('button')!;


function add( num1:any,num2:any){
    if(typeof num1 ==='number' && typeof num2 === 'number')
    {
        return num1+num2;
    }else if(typeof num2==='string' && typeof num1==='string')
        return num1+num2;
   
}

console.log();
mybtnele.addEventListener('click',()=>{
   
const num1=number1ele.value;
const num2 = number2ele.value;
const numresult =add(+num1,+num2);
const strresult = add(num1,num2);
console.log(numresult);
console.log(strresult);


})