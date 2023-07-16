import { Request, Response } from 'express';
import { get, controller, use, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(/*html*/ `
      <form method="POST">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(
    req: Request<{}, {}, { [key: string]: string | undefined }>,
    res: Response,
  ) {
    const { email, password } = req.body;

    if (email && password && email === 'e@e.com' && password === '123') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect('/');
  }
}
