let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let ans = document.getElementById('ans')

function fun_add(){
    let result = parseInt(num1.value) + parseInt(num2.value)
    ans.innerText = result;
    num1.value = ''
    num2.value = ''
}

function fun_minus(){
    let result = parseInt(num1.value) - parseInt(num2.value)
    ans.innerText = result;
    num1.value = ''
    num2.value = ''
}
function fun_multiply(){
    let result = parseInt(num1.value) * parseInt(num2.value)
    ans.innerText = result;
    num1.value = ''
    num2.value = ''
}
function fun_divide(){
    let val2 = parseInt(num2.value)
    if (val2 === 0){
        ans.innerText = 'cannot divide by zero'
    } else{
        let result = parseInt(num1.value) / parseInt(num2.value)
        ans.innerText = result;
        num1.value = ''
        num2.value = ''
    }
}

add.onclick = fun_add;
subtract.onclick = fun_minus;
multiply.onclick = fun_multiply;
divide.onclick = fun_divide;



