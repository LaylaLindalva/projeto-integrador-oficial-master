import jwt from "jsonwebtoken";

const createColaboradorToken = (colaborador, request, response) => {
  const token = jwt.sign(
    {
      id: colaborador.id,
      nome: colaborador.nome,
      email: colaborador.email,
      funcao: colaborador.funcao,
      curso: colaborador.curso,
      status: colaborador.status,
      treinamento: colaborador.treinamento,
      dataInicio: colaborador.dataInicio,
      dataTermino: colaborador.dataTermino
    },
    "SENHASUPERSEGURA",
    {
      expiresIn: "14h",
    }
  );

  response.status(200).json({
    message: "Você está autenticado",
    token: token,
    colaboradorId: colaborador.id,
  });
};

export default createColaboradorToken;