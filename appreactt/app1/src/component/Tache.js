import React from 'react'

export const Tache = ({tache,del}) => {
  return (
    <tr>
    <td>{tache.id}</td>
    <td>{tache.tache}</td>
    <td>{tache.user}</td>
    <td><div className="row">
         {(tache.etat === 'terminer') ? (
        
            <div className="alert text-success" role="alert">
               terminer
            </div>
        
        ) :( <div className="alert text-danger" role="alert">
        en cour
    </div>)
}</div></td>
    <td>
    <button className="btn btn-success">M</button>
    <button className="btn btn-danger" onClick={()=>del(tache.id)}>S</button>
    </td>

</tr> 
  )
}
 