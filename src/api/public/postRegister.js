import { IsValid } from "../../lib/IsValid.js";
import { connection } from "../../db.js";

export async function postRegister(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        email: 'email',
        password: 'password',
        tos: 'tos',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { username, email, password } = req.body;

    try {
        const sql = 'SELECT * FROM users;';
        const response = await connection.query(sql);

        console.log(response);

    } catch (error) {

    }

    console.log(req.body);

    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}