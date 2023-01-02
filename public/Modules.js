Add=(num1,num2)=>{
    return parseInt(num1)+parseInt(num2);
}
Sub=(num1,num2)=>{
    return parseInt(num1)-parseInt(num2);
}
Mul=(num1,num2)=>{
    return parseInt(num1)*parseInt(num2);
}
Div=(num1,num2)=>{
    return parseInt(num1)/parseInt(num2);
}
Mod=(num1)=>{
    return parseInt(num1)%10;
}
module.exports={
    Add,Sub,Mul,Div,Mod
}