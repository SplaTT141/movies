import { connection } from "../../db.js";
import { hash } from "../../lib/hash.js";
import { IsValid } from "../../lib/IsValid.js";
import { randomString } from "../../lib/randomString.js";

export async function postCategories(req, res) {
    const [err, msg] = IsValid.fields(req.body,
        {
            title: 'nonEmptyString',
            url: 'nonEmptyString',
            status: 'nonEmptyString',
        },
        {
            description: 'nonEmptyString',
        }
    );

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { title, url, status, description } = req.body;

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai sukurta filmu kategorija',
    });
}