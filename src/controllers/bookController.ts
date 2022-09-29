// This is a simple controller to gain an undertanding of tsoa swagger generation and open API validator
// tsoa looks for annotations, interfaces, types, jsDoc associated with a Controller
// to generate swagger documentation and routes to be registered with the app
import { Controller, Post, Put, Get, Route, Body, Tags, Path, Query, SuccessResponse, Response } from 'tsoa';
import { Book, createBook, updateBook, getBooks, getBookById } from '../services/bookService';
import { logger } from '../services/loggingService';

@Route('books')
export class bookController extends Controller {
  /**
   * Adds a book
   */
  @Tags('Books')
  @Post()
  @SuccessResponse('201', 'Created')
  public async postBook(@Body() book: Book): Promise<void> {
    await createBook(book);
    this.setStatus(201);
    return;
  }

  /**
   * Updates one or more book properties
   */
  @SuccessResponse('200', 'Updated')
  @Response('404', 'Unable to find book')
  @Tags('Books')
  @Put('{bookId}')
  public async putBook(@Path() bookId: number, @Body() book: Partial<Book>): Promise<void> {
    const wasBookFound = await updateBook(bookId, book);
    if (wasBookFound) return;
    this.setStatus(404);
    return;
  }

  /**
   * @isInt page_number page_number should be a positive integer
   * @minimum page_number 1
   * @isInt page_size page_size should be a positive integer
   * @minimum page_size 1
   */
  @Tags('Books')
  @Get()
  public async getBooks(@Query() page_size: number, @Query() page_number?: number): Promise<Array<Book>> {
    logger.warn(`ignoring page_number of ${page_number} and a page_size of ${page_size}`);
    return await getBooks();
  }

  /**
   * Get a book by ID
   */
  @Response('404', 'Unable to find book')
  @Tags('Books')
  @Get('{bookId}')
  public async getBook(@Path() bookId: number): Promise<Book> {
    const book = await getBookById(bookId);
    if (book) return book;
    this.setStatus(404);
    return;
  }
}
