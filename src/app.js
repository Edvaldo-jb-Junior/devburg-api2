const App = require("express");

class app {
    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();    
    }

    middlewares() {
        this.app.use(express.json());

    }

    routes() {}
}

module.exports = new app().app;
