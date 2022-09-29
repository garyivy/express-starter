import { Controller, Get, Route } from 'tsoa';

@Route('health')
export class UsersController extends Controller {
  @Get('readiness')
  public async getReadiness(): Promise<any> {
    return { message: 'ready for traffic' };
  }

  @Get('liveness')
  public async getLiveness(): Promise<any> {
    return { message: 'still alive' };
  }
}
