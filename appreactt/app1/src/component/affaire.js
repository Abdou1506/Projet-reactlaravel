 
  /* const [tacheform, settacheform] = useState({id:0,libelle:'.....'});
const add =()=>{
     setTaches([...Taches,tacheform])
     fetch(URL, {
       headers: {
         'content-type':'application/json'
       },  
       method:'POST',
       body:JSON.stringify(tacheform)
     })
   }
   const del=(id)=>{
   setTaches(Taches.filter(t=>t.id!==id))
   fetch(URL+id,{
     method:'delete'
   })
   }
   useEffect(() => {
   all();
   
     return () => {
       
     }
   }, [])
   
   const URL="http://localhost:3000/taches/"
   const all=()=>{
 fetch(URL).then(res=>res.json()).then(data=>setTaches(data))
   }
*/