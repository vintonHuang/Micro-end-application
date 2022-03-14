import Home from './../components/Home'
import About from './../components/About'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
]

// 注意 不是导出router对象
export default routes