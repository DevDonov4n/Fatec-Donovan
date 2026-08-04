const helloWorldGenerator = async (tempo) => {

    for(let i = tempo; i >= 0; i--){
        console.log(`Restam ${i} segundos`);
        if(i == 0){
            console.log('acabou o tempo');
            break;
        } 

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

helloWorldGenerator(10); 
