import { Router } from 'express';
import db from '../service/db'
const formularioRouter = Router();

formularioRouter.post('/', async (request, response) => {
    const resquest_data = request.body

    const query_params = []
    const query_keys = []
    for (let item in resquest_data) {
        query_keys.push(item)
        query_params.push(resquest_data[item])
    }

    const sql_query = `INSERT INTO  formularios (${query_keys.toString()}) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

    db.run(sql_query, query_params, function (err: { message: any; }, result: any) {
        if (err) {
            response.status(400).json({ "error": err.message })
            return;
        }
        response.json({
            "message": "success"
        })
    });
});

formularioRouter.get('/', async (request, response) => {
    const sql = "SELECT * FROM formularios"

    db.all(sql, (err, rows) => {
        if (err) {
            response.status(400).json({ "error": err.message });
            return;
        }
        response.json({
            "message": "success",
            "data": rows
        })
    });
});

export default formularioRouter;