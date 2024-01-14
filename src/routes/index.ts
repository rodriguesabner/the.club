import Home from '@/pages/Home/index.vue';
import Login from '@/pages/Login/index.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/tokens/buy', component: BuyTokens},
    {path: '/sent-email', component: SentEmail},
    {path: '/confirm-email/:token', component: ConfirmedEmail},
]

export default routes
