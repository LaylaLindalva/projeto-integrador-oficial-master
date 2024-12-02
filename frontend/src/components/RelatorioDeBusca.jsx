import React from "react";
import axios from "axios"
import Body from "./Body.jsx"
import List from "./List.jsx"



const RelatorioDeBusca = () => {

    const [funcionarios, setFuncionarios] = React.useState([])

  const handleGetList = async () => {
    try {
      const response = await axios.get("http://localhost:3333/api/funcionarios")
      setFuncionarios(response.data.funcionarios)
    } catch(error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    handleGetList()
  }, [])

    return(
    <>
        <Body/>
        <List funcionarios={funcionarios} setFuncionarios={setFuncionarios} />
    </>
    )
}

export default RelatorioDeBusca