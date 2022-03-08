import React from 'react'

export const Form = ({tacheform,add,settacheform}) => {
  return (
    <form>
      <div class="mb-3">
     <label for="exampleInputEmail1" className="form-label" >Tache</label>
    <input type="text" className="form-control" value={tacheform.tache} onChange={(e)=>settacheform({...tacheform,tache:e.target.value})}/>
    <label for="exampleInputEmail1" className="form-label"  >User</label>
    <input type="text" className="form-control" value={tacheform.user}  onChange={(e)=>settacheform({...tacheform,user:e.target.value})}/>
    <label for="exampleInputEmail1" className="form-label" >Etat</label>
    <input type="text" className="form-control" value={tacheform.etat} onChange={(e)=>settacheform({...tacheform,etat:e.target.value})}/>
    
    <button  type="button" className='btn btn-primary' onClick={add} >Ajouter</button>
  </div>
  </form>
  )
}
