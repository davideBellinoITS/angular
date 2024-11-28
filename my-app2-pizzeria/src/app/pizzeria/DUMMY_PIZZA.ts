import { Pizza } from "./pizza/pizza.model";

export const DUMMY_PIZZA: Pizza[] = [
    {
        id: 1,
        nome: 'Margherita',
        prezzo: 6.00,
        ingredienti: ['Pomodoro', 'Mozzarella', 'Basilico'],
        img: './img/margherita.webp'
    },
    {
        id: 2,
        nome: 'Marinara',
        prezzo: 5.50,
        ingredienti: ['Pomodoro', 'Aglio'],
        img: './img/Marinara.webp'
    },
    {
        id: 3,
        nome: 'Prosciutto e funghi',
        prezzo: 7.50,
        ingredienti: ['Pomodoro', 'Mozzarella', 'Prosciutto cotto', 'Funghi'],
        img: './img/prosciuttoFunghi.webp'
    },
    {
        id: 4,
        nome: '4 stagioni',
        prezzo: 8.50,
        ingredienti: ['Pomodoro', 'Mozzarella', 'Prosciutto cotto', 'Funghi', 'Olive nere', 'Carciofi'],
        img: './img/quattroStag.jpg'
    }
 ]
 