import { useState } from "react";

export default function Text () {
const [compras, setCompras] = useState([])

const adicionar = () => {
  setCompras ([...compras, 'Laranja'])
}
  return ( 
    <>

</>
  );
}