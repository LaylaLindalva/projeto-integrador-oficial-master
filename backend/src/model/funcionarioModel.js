import conn from "../config/conn.js";
import { DataTypes } from "sequelize";


const Funcionario = conn.define("funcionarios", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    funcao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    curso: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    status_curso: {
        type: DataTypes.ENUM,
        values: ["pendente", "cursando", "concluida"],
        defaultValue: 'pendente'
    },
    treinamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_inicio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_conclusao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}) 


export default Funcionario;