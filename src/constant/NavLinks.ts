export enum NAV_LINKS { 
    HOME = '/', 
    LOGIN = '/auth', 
    SIGNUP = '/auth/signup', 
    ADMIN = '/admin', 
    SHOES = '/shoes', 
    SHOE_DETAIL = '/shoes/:id', 
    CART = '/cart'
}

export const NAV_LINK = [ 
    { NAME: 'home', URL: "/" },
    { NAME: 'auth', URL: "/auth" }, 
    { NAME: 'admin', URL: "/admin" }, 
    { NAME: 'shoes', URL: '/shoes' }, 
    {  }
]