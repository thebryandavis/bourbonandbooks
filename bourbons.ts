import { Bourbon, BookPairing } from '../types';

export const bourbons: Bourbon[] = [
  {
    id: '1',
    name: 'Blanton\'s Single Barrel',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A luxurious single barrel bourbon with notes of vanilla, honey, and caramel followed by a warm, slightly spicy finish.',
    pairingRationale: 'The complexity and richness of this bourbon mirror the intricate social layers and extravagance of the Jazz Age portrayed in the novel.'
  },
  {
    id: '2',
    name: 'Buffalo Trace',
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A well-balanced bourbon with notes of brown sugar, toffee, oak, and dark fruit, with a smooth, satisfying finish.',
    pairingRationale: 'This approachable yet complex bourbon reflects the accessible yet profound examination of human history and evolution covered in the book.'
  },
  {
    id: '3',
    name: 'Woodford Reserve Double Oaked',
    image: 'https://images.pexels.com/photos/4667005/pexels-photo-4667005.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A twice-barreled bourbon offering a rich character with notes of dark chocolate, caramel, and marzipan with a creamy texture.',
    pairingRationale: 'The depth and complexity of this double-oaked bourbon complement the layered moral themes and Southern setting of the novel.'
  },
  {
    id: '4',
    name: 'Four Roses Small Batch',
    image: 'https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A mellow, smooth bourbon with hints of berries, vanilla, and oak with a gentle, warming finish.',
    pairingRationale: 'The balanced yet nuanced character of this bourbon mirrors the book\'s exploration of the dual nature of human thinking and reasoning.'
  }
];

export const bookPairings: BookPairing[] = [
  { bookId: '1', bourbonId: '1' },
  { bookId: '2', bourbonId: '2' },
  { bookId: '3', bourbonId: '3' },
  { bookId: '4', bourbonId: '4' }
];