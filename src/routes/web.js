import express from 'express';
let router = express.Router();
import homeController from '../controller/homeController.js';
const initWebRoute = (app) => {
    //    router.get('/', homeController.getHomepage);

    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.get('/about', (req, res) => {
        res.send (`I'm Nam!`)
    })

    return app.use('/', router)
};

export default initWebRoute;
