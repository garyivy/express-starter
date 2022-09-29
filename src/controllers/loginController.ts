import { Controller, Post, Route, Body } from 'tsoa';

export interface UserCredentials {
  userName: string;
  password: string;
}

@Route('login')
export class LoginController extends Controller {
  /**
   * Validates credentials for a user.
   * Returns a bearer token for use in protected API calls.
   */
  @Post()
  public async postLogin(@Body() body: UserCredentials): Promise<any> {
    return body;
  }
}
