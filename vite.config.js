import handlebars from 'vite-plugin-handlebars';
import data from './data.json'assert { type: 'json' };

export default {
    base: '/responsive_webpage/',
    plugins: [handlebars({
        context:
            data 

    })],
};