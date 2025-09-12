import { useEffect, useState } from "react";

export default function Usuarios() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsuarios(data))
    .catch(err => console.log(err))
    .finally(console.log("Carregou desgraça")) 
  },[])

  const [usuarios, setUsuarios] = useState([])

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map(pegaItem => (
        <div key={pegaItem.id}>
          <p>{pegaItem.name}</p>
          <p>{pegaItem.email}</p>
        </div>
      ))}
    </div>
  );
}