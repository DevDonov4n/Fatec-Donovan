/*const temporizador = async (tempo) => {

    for(let i = tempo; i >= 0; i--){
        console.log(`Restam ${i} segundos`);
        if(i == 0){
            console.log('acabou o tempo');
            break;
        } 

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
temporizador(10); 
*/

const devTs = {
    nome: "Donovan",
    linguagem: "TypeScript",
    salário: 3000,
    tomouCafé: true
}

const verificaSeTomouCafe = () => {
    if(devTs.tomouCafé){
        return 'tomou café';
    }else{
        return 'ainda não tomou café';
    }
}

console.log(`o nome dele é ${devTs.nome}, ele coda bastante em ${devTs.linguagem} ele ganha por mês R$${devTs.salário} e ${verificaSeTomouCafe()}`);


