import { Router } from "express";
import { createFuncionario, getAll, updateFuncionario, deleteFuncionario } from "../controller/funcionarioController.js";


const router = Router()

router.post("/cadastro", createFuncionario)
router.get("/listar", getAll)
router.put("/:id", updateFuncionario)
router.delete("/:id", deleteFuncionario)


export default router