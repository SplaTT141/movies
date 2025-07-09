import { Error401 } from "../pages/public/Error401.js";

export function isAdmin(req, res, next) {
    if (!req.user.isLoggedIn) {
        return res.send(new Error401(req).render());
    }

    return next();
}