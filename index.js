function somatorioMultiplos() {
  let numero = parseInt(document.getElementById("numero").value)

  if (numero <= 0 || numero % 1 !== 0 || !Number.isInteger(numero)) {
    alert("Digite um número inteiro e positivo.")
    } else {
    let soma = 0;
    let numerosDivisiveis = []
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
        numerosDivisiveis.push(i)
      }
    }
    document.getElementById("Somatório").innerText = `O somatório é: ${soma}`
    document.getElementById("Divisiveis3e5").innerText = `Foram somados os números: ${numerosDivisiveis}`
  }
}