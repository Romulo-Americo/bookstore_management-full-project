let date = new Date();

console.log("Data atual " + date);

let dataFinal = new Date(date);
dataFinal.setMonth(dataFinal.getMonth() + 1);
console.log("Data final " + dataFinal);

const formatarData = (data) => {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}


console.log("Data de hoje: " + formatarData(date));
console.log("Data 4 meses depois: " + formatarData(dataFinal));