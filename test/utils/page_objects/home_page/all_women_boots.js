const HomePage = require("./home_page");


class AllWomanBootsPage extends HomePage {
    constructor() {
        super();
        this.title = new Elementment('css', '#result-list-toolbar-left-header');
    }

    getTitle() {
        logger.info(`Title is verified`);
       return this.title;
    }
}

exports.module = AllWomanBootsPage;