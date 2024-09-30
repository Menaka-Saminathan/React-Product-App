import acces1 from '../assets/acces-1.webp'
import acces2 from '../assets/acces-2.webp'
import acces3 from '../assets/acces-3.webp'
import acces4 from '../assets/acces-4.webp'
import acces5 from '../assets/acces-5.webp'
import acces6 from '../assets/acces-6.webp'
import acces7 from '../assets/acces-7.webp'
import acces8 from '../assets/acces-8.webp'
import acces10 from '../assets/acces-10.webp'
import acces11 from '../assets/acces-11.webp'
import acces12 from '../assets/acces-12.webp'
import acces13 from '../assets/acces-13.webp'
import acces14 from '../assets/acces-14.webp'
import acces15 from '../assets/acces-15.webp'
import acces17 from '../assets/acces-17.webp'
import acces18 from '../assets/acces-18.webp'
import acces19 from '../assets/acces-19.webp'
import acces20 from '../assets/acces-20.webp'
import acces21 from '../assets/acces-21.webp'
import acces22 from '../assets/acces-22.webp'
import acces23 from '../assets/acces-23.webp'
 
interface accessory {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number
}
 
export const AccessoryList:accessory[] = [
    {id: 1, title: 'Better Than Best Friends', price: 299, image: acces1, quantity:0 },
    { id: 2, title: '50 Greatest Short Stories', price: 299, image: acces2, quantity:0 },
    { id: 3, title: `India's Greatest Short Stories`, price: 299, image: acces3, quantity:0 },
    { id: 4, title: 'I Love You Daddy', price: 299, image: acces4, quantity:0 },
    { id: 5, title: 'I Love You Mummy', price: 299, image: acces5, quantity:0 },
    { id: 6, title: 'I Love My Family', price: 299, image: acces6, quantity:0 },
    { id: 7, title: 'The Art Of Letting Go', price: 299, image: acces7, quantity:0 },
    { id: 8, title: 'Autotheory', price: 299, image: acces8, quantity:0 },
    { id: 9, title: 'You Only Live Once', price: 299, image: acces10, quantity:0 },
    { id: 10, title: 'One Arranged Marriage Murder', price: 299, image: acces11, quantity:0 },
    { id: 11, title: 'A Touch Of Eternity', price: 299, image: acces12, quantity:0 },
    { id: 12, title: 'Everything I Never Told You', price: 299, image: acces13, quantity:0 },
    { id: 13, title: `I'd Love To Be`, price: 299, image: acces14, quantity:0 },
    { id: 14, title: 'The Gruffalo', price: 299, image: acces15, quantity:0 },
    { id: 15, title: 'The Lion Inside', price: 299, image: acces17, quantity:0 },
    { id: 16, title: 'Untold Feelings', price: 299, image: acces18, quantity:0 },
    { id: 17, title: 'Love With Her Best Friend', price: 299, image: acces19, quantity:0 },
    { id: 17, title: 'Love With Her Best Friend', price: 299, image: acces20, quantity:0 },
    { id: 18, title: 'All I Ever Want Is You', price: 299, image: acces21, quantity:0 },
    { id: 19, title: `I Don't Love You Anymore`, price: 299, image: acces22 , quantity:0},
    { id: 20, title: 'Warmth', price: 299, image: acces23, quantity:0},
  ];

