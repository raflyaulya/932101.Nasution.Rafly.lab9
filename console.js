function clearinput(){
    document.getElementById('inputNum').value = ''
}

function input(val){
    let operator = ['+', '.', '/','-']
    let input = document.getElementById('inputNum').value
    if (operator.includes(val) && operator.includes(input.slice(-1))) {
        alert('Wrong input')
    } else{
        document.getElementById('inputNum').value = document.getElementById('inputNum').value + val
    }
}

function del(){
    let val = document.getElementById('inputNum').value
    val = val.slice(0, -1)
    document.getElementById('inputNum').value = val
}

function solvecalc(){
    let str = document.getElementById('inputNum').value
    let res = ''

    try{
        res = eval(str)
        document.getElementById('inputNum').value = res
    } catch(error){
        alert("Wrong input")
    }
}