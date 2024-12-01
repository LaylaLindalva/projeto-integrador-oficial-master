import { Router } from "express";
import { createColaborador } from "../controller/colaboradorController.js";


const router = Router()

router.post("/cadastroColaborador", createColaborador)


export default router