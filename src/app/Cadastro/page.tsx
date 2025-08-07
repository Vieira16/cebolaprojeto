'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Text from "../Components/Text";
import Text2 from "../Components/Text2";
import { useState } from "react";

export default function cadastro() {
  const [m, setM] = useState(0)

  return (
    <>
<h1> HelloCadastro </h1>
{
  m == 0 ? <>
  <Text></Text>
  </>: <>
  <Text2></Text2>
    </>
  }
  <button onClick={(e) => {
    m == 0 ? setM(1) : setM(0)
  }}>mudar</button>
  </>
  );
}