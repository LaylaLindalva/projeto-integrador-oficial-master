import conn from "../config/conn";
import { DataTypes } from "sequelize";


const Colaborador = conn.define("colaborador", {
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
    status: {
        type: DataTypes.ENUM,
        values: ["pendente", "concluida"],
        defaultValue: 'pendente'
    },
    treinamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataTermino: {
        type: DataTypes.DATE,
        allowNull: false
    }
}) 


export default Colaborador;