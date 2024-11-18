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

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');
    const mensaje = document.getElementById('mensaje');
    const arr = [nombre, email, fecha, hora, mensaje];
    const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         fecha.value = "";
         hora.value = "";
         mensaje.value = "";
    return true;

}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}
getData()