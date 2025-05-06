

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
        console.log(datas[0]);
    }
    catch(error){
        console.log('Error al obtener los datos',error)
    }
}

btn.addEventListener("click",()=>{
    data();
})