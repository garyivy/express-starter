// This is a simple controller to gain an undertanding of tsoa swagger generation and open API validator
import { Controller, Post, Put, Get, Route, Body, Tags, Path, Query, SuccessResponse } from 'tsoa';
import { logger } from '../services/loggingService';

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

@Route('books')
export class bookController extends Controller {
  /**
   * Adds a book
   */
  @Tags('Books')
  @Post()
  @SuccessResponse('201', 'Created')
  public async postBook(@Body() body: Book): Promise<any> {
    inventory.push(body);
    this.setStatus(201);
    return;
  }

  /**
   * Updates one or more book properties
   */
  @Put('{bookId}')
  public async putBook(@Path() bookId: number, @Body() body: Partial<Book>): Promise<any> {
    return { message: 'not implemented', bookId, body };
  }

  /**
   * @isInt page_number page_number should be a positive integer
   * @minimum page_number 1
   * @isInt page_size page_size should be a positive integer
   * @minimum page_size 1
   */
  @Get()
  public async getBooks(@Query() page_size: number, @Query() page_number?: number): Promise<Array<Book>> {
    logger.warn(`ignoring page_number of ${page_number} and a page_size of ${page_size}`);
    return inventory;
  }
}
