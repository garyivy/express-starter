import { Controller, Get, Route, Tags } from 'tsoa';

@Route('health')
export class UsersController extends Controller {
  /**
   * Probe for determine if application is ready to receive requests
   */
  @Tags('Health')
  @Get('readiness')
  public async getReadiness(): Promise<any> {
    return { message: 'ready for traffic' };
  }

  /**
   * Probe for determine if application is can still receive requests
   */
  @Tags('Health')
  @Get('liveness')
  public async getLiveness(): Promise<any> {
    return { message: 'still alive' };
  }
}
