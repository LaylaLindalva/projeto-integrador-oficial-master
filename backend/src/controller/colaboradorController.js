import conn from "../config/conn.js"
import Colaborador from "../model/colaboradorModel"

export const createColaborador = async (request, response) => {
    const {nome, email, funcao,curso, status, treinamento, dataInicio, dataTermino} = request.body

    try{
        await Colaborador.create({nome, email, funcao,curso, status, treinamento, dataInicio, dataTermino})
        response.status(201).json({message: "Colaborador cadastrado com sucesso!"})
    } catch(error){
        response.status(500).json({message: "Erro ao cadastrar colaborador"})
    }
}