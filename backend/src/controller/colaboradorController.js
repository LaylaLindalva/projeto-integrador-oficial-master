// import conn from "../config/conn.js"
// import Colaborador from "../model/funcionarioModel.js"
// import { z } from "zod"

// const createSchema = z.object({
//     nome: z.string({
//         invalid_type_error: "O nome deve ser um texto",
//         required_error: "Nome é obrigatório"
//     }),
//     email: z.string().email({
//         invalid_type_error: "O email deve ser um texto",
//         required_error: "Email é obrigatório"
//     }),
//     funcao: z.string({
//         invalid_type_error: "A função deve ser um texto",
//         required_error: "Função é obrigatória"
//     }),
//     curso: z.string({
//         invalid_type_error: "O curso deve ser um texto",
//         required_error: "O curso é obrigatório"
//     }),
//     treinamento: z.string({
//         invalid_type_error: "O treinamento deve ser um texto",
//         required_error: "Treinamento é obrigatório"
//     }),
//     dataInicio: z.number({
//         invalid_type_error: "A data deve ser um número",
//         required_error: "Número é obrigatório"
//     }),
//     dataTermino: z.number({
//         invalid_type_error: "A data deve ser um número",
//         required_error: "Número é obrigatório"
//     })
// })


// export const createColaborador = async (request, response) => {

//     const createValidation = createSchema.safeParse(request.body)
//     if(!createValidation.success){
//         response.status(400).json(createValidation.error)
//         return
//     }

//     const {nome, email, funcao,curso, treinamento, dataInicio, dataTermino} = createValidation.data


//     const novoColaborador = {
//         nome, 
//         email, 
//         funcao,
//         curso, 
//         treinamento, 
//         dataInicio, 
//         dataTermino
//     }
//     try{
//         const insertColaborador = await Colaborador.create(novoColaborador)
//         response.status(201).json(insertColaborador)
//     } catch(error){
//         response.status(500).json({message: "Erro ao cadastrar colaborador"})
//     }
// }