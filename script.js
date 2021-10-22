var numeros = []
function adicionar(){
    let num = document.getElementById('txtn')
    let number = Number(num.value)
    if (number == 0 || number > 100 || number.length == 0){
        alert('ERRO ao adicionar os dados. Tente outra vez')
    } else {
        console.log('accept')
        numeros.push(number)
        console.log(numeros)
        num.value = ''
    }
}