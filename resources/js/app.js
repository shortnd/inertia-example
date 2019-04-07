import Inertia from 'inertia-vue'
import Vue from 'vue'

window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) { }

let app = document.getElementById('app')

new Vue({
    render: h => h(Inertia, {
        props: {
            component: app.dataset.component,
            props: JSON.parse(app.dataset.props),
            resolveComponent: (component) => {
                return import(`@/Pages/${component}`).then(module => module.default)
            },
        },
    }),
}).$mount(app)
