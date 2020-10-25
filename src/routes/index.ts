import { Router } from 'express';
import formularioRouter from './formulario.routes';
const routes = Router();

routes.use('/formulario', formularioRouter)

export default routes;