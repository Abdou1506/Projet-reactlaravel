import React from 'react'

import { Tache } from './Tache';


export const Liste = ({taches,del}) => {
  return (
    <table className="table table-success table-striped">
<thead>
  <tr>
  <th>#</th>
  <th>Libelle</th>
  <th>Nom</th>
  <th>Etat</th>
  <th>Action</th>
  </tr>
</thead>
<tbody> 
   {
       taches.map(t=><Tache tache={t} del={del}/>)
   }
    </tbody> 
      
      
    </table>
  )
}
