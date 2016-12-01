import Home from './view/Home1.vue'
import firstComponent from './components/firstComponent.vue';
import secondCompoent from './components/secondComponent.vue';

const routers = [
    { path: '/', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/first/:id', component: firstComponent },
    { path: '/second', component: secondCompoent },
    { path: '/*', redirect: { name: 'Home' } }
]

export default routers;