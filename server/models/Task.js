import { pool } from '../helper/db.js'

const selectAllTasks = async () => {
    return await pool.query('SELECT * FROM task')
}

const addNewTask = async (description) => {
    return await pool.query('INSERT INTO task (description) VALUES ($1) RETURNING *',[description])
}

const deleteTask = async (id) => {
    return await pool.query('delete from task WHERE id = $1 returning *',[id])
}

export { selectAllTasks, addNewTask, deleteTask }