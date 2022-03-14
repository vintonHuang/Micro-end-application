/*
 * @Author: Vinton
 * @Date: 2020-12-06 11:36:09
 * @Description: file content
 */
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