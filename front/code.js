

const results=document.getElementById("datas")
const btn=document.getElementById("buscar")
const data=async()=>{
    try{
        const namePerson=document.getElementById("name");//cambiando el nombre por Rick trae los datos
        console.log(namePerson.value)
        const URL=`http://localhost:3000/characters/${namePerson.value}`
        const response=await fetch(URL);
        if(!response.ok){
            throw new Error ('Hay un error en la descarga',response.status);
        }
        const datas=await response.json();
        dataHtml(datas[0]);

    }
    catch(error){
        console.log('Error al obtener los datos',error)
    }
}

function dataHtml(personaje){
    const {name, status, species,origin:{name1},image,gender}=personaje
    results.innerHTML=`
        <h3>El personaje obtenido es:</h3>
        <ul>
            <li>Name: ${name}</li>
            <li>Status: ${status}</li>
            <liSpecies: ${species}</li>
            <li>Gender: ${gender}</li>
            <li>Origin: ${name1}</li>
        </ul>
        <img src="${image}">
    `
}

btn.addEventListener("click",()=>{
    data();
})