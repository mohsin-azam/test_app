interface DateItem {
  id: string;
  label: string;
}

interface SessionItem {
  id: string;
  time: string;
  hall: string;
  price: string;
  bonus: string;
  image: string; // image URL or local require
}

export const dates: DateItem[] = [
  { id: '1', label: '5 Mar' },
  { id: '2', label: '6 Mar' },
  { id: '3', label: '7 Mar' },
  { id: '4', label: '8 Mar' },
  { id: '5', label: '9 Mar' },
];

export const sessions: SessionItem[] = [
  {
    id: '1',
    time: '12:30',
    hall: 'Cinetech + Hall 1',
    price: '50$',
    bonus: '2500',
    image: 'https://i.imgur.com/0y8Ftya.png', // dummy seat layout image
  },
  {
    id: '2',
    time: '13:30',
    hall: 'Cinetech + Hall 2',
    price: '75$',
    bonus: '3000',
    image: 'https://i.imgur.com/0y8Ftya.png',
  },
];
