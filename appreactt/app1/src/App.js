

import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './component/Form';
 import { Liste } from './component/Liste';

function App() {
  const [taches, settaches] = useState([
    {id:1,tache:'tache1',user:'abdou',etat:'encour'},
    {id:2,tache:'tache2',user:'MYA',etat:'encour'}
  ])
  const [tacheform, settacheform] = useState({id:0,tache:'...',user:'...',etat:'....'})
  const add =()=>{
    settaches([...taches,tacheform])
    fetch(URL, {
      headers: {
        'content-type':'application/json'
      },  
      method:'POST',
      body:JSON.stringify(tacheform)
    })
  }
  useEffect(() => {
    all();
    
      return () => {
        
      }
    }, [])
  const URL="http://127.0.0.1:8000/etudiants/"
  const all=()=>{
fetch(URL).then(res=>res.json()).then(data=>settaches(data))
  }
  const del=(id)=>{
    settaches(taches.filter(t=>t.id!==id))
    fetch(URL+id,{
      method:'delete'
    })
    }
    const count=(etat)=>{
      const compt=taches.filter((e)=>e.etat===etat);
      return compt.length;
       
    }
    
  return (
   <>
<Form tacheform={tacheform}  add={add} settacheform={settacheform}/>
<Liste taches={taches} del={del}/>

nombre de tache en cour est :{count("en cour")} <br/>
nombre de tache terminer est :{count("terminer")}
   </>
  );
}

export default App;
