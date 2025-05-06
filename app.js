//instalar lo primero "npm init -y"
//instalar lo segundo "npm i express axios"
//Quitamos el caret ^
//instalar lo tercero "npm i cors -E" esto sirve para que pueda trabajar el servidor con el front dado que no se encuentran en el mismo orígen las carpetas

const express=require("express"); //Requerimos express
const axios=require("axios");//Requerimos axios para el control de errores
const cors=require("cors"); //Requerimos cors para trabajar con el front y el back
const app=express();//Ejecutamos el servidor de express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT=3000;


app.get(`/characters`,async(req,res)=>{
    
    const url=`https://rickandmortyapi.com/api/character`
    try{
        const response=await axios.get(url);
        const data=response.data.results;
        res.json(data);
    }catch(ERROR){
        res.status(404).json({error:'Personaje no encontrado'});
    }
})

app.get(`/characters/:name`,async(req,res)=>{
    const name=req.params.name;
    const url=`https://rickandmortyapi.com/api/character/?name=${name}`;
    try{
        const response=await axios.get(url);
        const data=response.data.results;
        res.json(data);
    }catch(ERROR){
        res.status(404).json({error:'Personaje no encontrado'});
    }
})

app.listen(PORT,()=>{
    console.log(`El servidor escucha por http://localhost:${PORT}/characters`);
})

