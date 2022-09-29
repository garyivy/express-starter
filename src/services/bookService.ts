export type BookStatus = 'New' | 'Used' | 'Out Of Stock';
export interface Book {
  id: number;
  author: string;
  title: string;
  status: BookStatus;
  description?: string;
}

const inventory: Array<Book> = [
  { id: 1, author: 'Bill Smith', title: 'They call me Billy', status: 'New' },
  { id: 2, author: 'Jim Smith', title: 'They call me Jimmy', status: 'Used' },
];

export const createBook = async (book: Book) => {
  await Promise.resolve();
  inventory.push(book);
};

export const updateBook = async (bookId: number, updates: Partial<Book>): Promise<boolean> => {
  await Promise.resolve();
  const index = inventory.findIndex(b => b.id === bookId);
  if (index > -1) {
    inventory[index] = { ...inventory[index], ...updates };
    return true;
  }
  return false;
};

export const getBooks = async (): Promise<Array<Book>> => {
  await Promise.resolve();
  return inventory;
};

export const getBookById = async (bookId: number): Promise<Book> => {
  await Promise.resolve();
  return inventory.find(b => b.id === bookId);
};
