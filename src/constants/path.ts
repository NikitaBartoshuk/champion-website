export const PATH = [{link: '/', text: 'Home'}, {link: '/personal', text: 'Personal'},
    {link: '/blog', text: 'Blog'}, {link: '/vacancies', text: 'Vacancies'}]

export const SHOP_PATH = {link: '/shop', text: 'Shop'}

export const PAGES_PATHS = {
    vacancies: '/vacancies',
    blog: '/blog',
    personal: '/personal',
    mainPage: '/',
    shop: '/shop'
}

export const IMG_PATHS = {
    navbarLogo: require('../assets/footerimage.svg').default,
    footerLogo: require('../assets/footerimage.svg').default,
    headerBigLogo: require('../assets/hero.png').default,
}

export const API = {
    user: {
        login: 'http://localhost:5000/api/user/login',
        registration: 'http://localhost:5000/api/user/registration'
    },
    blog: {
        getAll: 'http://localhost:5000/api/blog'
    },
    vacancies: {
        getAll: 'http://localhost:5000/api/vacancies'
    },
    shop: {
        getAll: 'http://localhost:5000/api/shop'
    }
}