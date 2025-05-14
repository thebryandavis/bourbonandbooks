import { Book } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    summary: 'A captivating portrait of the Jazz Age, following the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan. The novel explores themes of decadence, idealism, social upheaval, and excess.',
    quotes: [
      { text: 'So we beat on, boats against the current, borne back ceaselessly into the past.' },
      { text: 'I hope she\'ll be a fool -- that\'s the best thing a girl can be in this world, a beautiful little fool.' },
      { text: 'In my younger and more vulnerable years my father gave me some advice that I\'ve been turning over in my mind ever since.' }
    ],
    goodreadsUrl: 'https://www.goodreads.com/book/show/4671.The_Great_Gatsby',
    genre: 'Fiction'
  },
  {
    id: '2',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    cover: 'https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4,
    summary: 'A groundbreaking narrative of humanity\'s creation and evolution that explores how biology and history have defined us. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires.',
    quotes: [
      { text: 'You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven.' },
      { text: 'How do you cause people to believe in an imagined order such as Christianity, democracy or capitalism? First, you never admit that the order is imagined.' },
      { text: 'Large numbers of strangers can cooperate successfully by believing in common myths.' }
    ],
    goodreadsUrl: 'https://www.goodreads.com/book/show/23692271-sapiens',
    genre: 'Nonfiction'
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    summary: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.',
    quotes: [
      { text: 'You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.' },
      { text: 'I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand.' },
      { text: 'Until I feared I would lose it, I never loved to read. One does not love breathing.' }
    ],
    goodreadsUrl: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird',
    genre: 'Fiction'
  },
  {
    id: '4',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    cover: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4,
    summary: 'A tour de force of psychological insight, explaining the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.',
    quotes: [
      { text: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.' },
      { text: 'Nothing in life is as important as you think it is, while you are thinking about it.' },
      { text: 'The illusion that we understand the past fosters overconfidence in our ability to predict the future.' }
    ],
    goodreadsUrl: 'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow',
    genre: 'Nonfiction'
  }
];