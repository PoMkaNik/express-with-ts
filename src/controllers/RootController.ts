import { Request, Response } from 'express';
import { requireAuth } from '../middleware/requireAuth';

import { controller, get, use } from './decorators';

@controller('')
export class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(/*html*/ `
      <div>
        <div>You are logged in</div>
        <a href="/auth/logout">Logout</a>
      </div>
    `);
    } else {
      res.send(/*html*/ `
      <div>
        <div>You are NOT logged in</div>
        <a href="/auth/login">Login</a>
      </div>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtectedRoute(req: Request, res: Response) {
    res.send(/*html*/ `
    <div>Welcome to protected route</div>
  `);
  }
}
