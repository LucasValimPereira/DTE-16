const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const resultado = document.getElementById('resultado')

function somar() {
    if (num1.value === '' || num2.value === '') {
        alert('Preencha todos os campos!')
    } else {
        const soma = Number(num1.value) + Number(num2.value)
        resultado.textContent = `resultado = ${soma}`
    }
}

function subtrair() {
    if (num1.value === '' || num2.value === '') {
        alert('Preencha todos os campos!')
    } else {
        const soma = Number(num1.value) - Number(num2.value)
        resultado.textContent = `resultado = ${soma}`
    }
}

function multiplicar() {
    if (num1.value === '' || num2.value === '') {
        alert('Preencha todos os campos!')
    } else {
        const soma = Number(num1.value) * Number(num2.value)
        resultado.textContent = `resultado = ${soma}`
    }
}
function dividir() {
    if (num1.value === '' || num2.value === '') {
        alert('Preencha todos os campos!')
    } else {
        const soma = Number(num1.value) / Number(num2.value)
        resultado.textContent = `resultado = ${soma}`
    }
}

const AP1 = document.getElementById('AP1')
const AP2 = document.getElementById('AP2')
const AS = document.getElementById('AS')
const soma = document.getElementById('soma')

function calcularNota() {
    if (AP1.value === '' || AP2.value === '' || AS.value === '') {
        alert('Preencha com as notas!')
    } else {
        //alert(soma)
        const notaFinal = Number(AP1.value) + Number(AP2.value) + Number(AS.value)
        //alert(soma)
        if (notaFinal >= 6) {
            soma.textContent = `Nota = ${notaFinal}.Aprovado. Parabéns`
        }
        else {
            soma.textContent = `Nota = ${notaFinal}.Reprovado. Reforce seus estudos para realização da AF`
        }
    }
}

function limpar() {
    num1.value = ''
    num2.value = ''
    resultado.textContent = 'resultado ='
    num1.focus()
}

function limpar2() {
    AP1.value = ''
    AP2.value = ''
    AS.value = ''
    soma.textContent = 'soma'
    AP1.focus()
}