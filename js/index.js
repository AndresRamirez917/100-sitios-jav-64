async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    console.log(character)
    const jsonArr = character.results.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    const jsonArrSliced = jsonArr.slice(0,7);
    character.results.forEach(element => {
        const randData  = (min, max) => Math.floor(Math.random()*(max - min + 1) + min);
        const randIndex = randData(1, jsonArr.length);
        for(i = 0; i < jsonArrSliced.length; i++){
            if(element.id == i){
                const img = document.createRange().createContextualFragment(`
                    
                    <div class="portfolio-${i}">
                    <img src="${jsonArr[randIndex][8][1]}" alt="">
                    </div>
                    
                    `)
                    const portafolio = document.querySelector('.portfolio-container');
                    portafolio.append(img)
            }
        }
    });
}

getData()