import React, { useState } from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import axios from 'axios';

const CadastroColaborador = () => {
  const [show, setShow] = useState(false);
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [funcao, setFuncao] = React.useState('')
  const [curso, setCurso] = React.useState('')
  const [treinamento, setTreinamento] = React.useState('')
  const [data_inicio, setDataInicio] = React.useState('')
  const [data_conclusao, setDataConclusao] = React.useState('')
  const [message, setMessage] = React.useState(null)

  

  const handlePost = async () => {
    
    try{
      await axios.post("http://localhost:3333/api/cadastro", {
        nome,
        email,
        funcao,
        curso,
        treinamento,
        data_inicio,
        data_conclusao
      })
      setMessage("Cadastro realizado com sucesso!")
    } catch(error){
      setMessage("Não foi possível cadastrar o colaborador!")
    }
  } 

  return (
    <>
        <Form onSubmit={handlePost}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Digite o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Função</Form.Label>
        <Form.Control
        type='text' 
        placeholder="Digite qual é a função"
        value={funcao}
        onChange={(e) => setFuncao(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Curso</Form.Label>
        <Form.Control 
        type='text'
        placeholder="Digite qual é curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        required
         />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Treinamento</Form.Label>
          <Form.Control
          type='text'
          placeholder='Digite o tipo de treinamento'
          value={treinamento}
          onChange={(e) => setTreinamento(e.target.value)}
          required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Data de Início</Form.Label>
          <Form.Control
          type='text'
          placeholder='Data de início'
          value={data_inicio}
          onChange={(e) => setDataInicio(e.target.value)}
          required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Data de conclusão</Form.Label>
          <Form.Control 
          type='text'
          placeholder='Data de conclusão'
          value={data_conclusao}
          onChange={(e) => setDataConclusao(e.target.value)}
          required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    </>
  );
}

export default CadastroColaborador;