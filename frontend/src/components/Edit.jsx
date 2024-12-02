import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

const Edit = ({show, handleClose, funcionario, handleSubmitEdit, handleEdit}) => {

    const ref = React.useRef()

    React.useEffect(()=>{
        if(funcionario){
            const form = ref
            form.nome = funcionario.nome
            form.cargo = funcionario.cargo
            form.curso = funcionario.curso
            form.status_curso = funcionario.status_curso
            form.data_inicio = funcionario.data_inicio
            form.data_conclcusao = funcionario.data_conclusao
        }
    }, [funcionario])

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const form = ref
        handleEdit({
            ...funcionario,
            nome: form.nome.value,
            cargo: form.cargo.value,
            curso: form.curso.value,
            status_curso: form.status_curso.value,
            data_inicio: form.data_inicio.value,
            data_conclusao: form.data_conclusao.value
            
        })
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='nomeEdit'>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group controlId='cargoEdit'>
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group controlId='cursoEdit'>
                            <Form.Label>Curso</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group controlId='status_cursoEdit'>
                            <Form.Label>Status</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group controlId='data_inicioEdit'>
                            <Form.Label>Data de Início</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group controlId='data_cunclusaoEdit'>
                            <Form.Label>Data de Conlusão</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Salvar Mudanças
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Edit;