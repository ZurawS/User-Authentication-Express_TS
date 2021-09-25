import { NextFunction, Request, Response } from "express";
import { controller, get, bodyValidator, post } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    {
      res.send(`
          <form method='POST'>
              <div>
                  <label>Email</label>
                  <input name='email'>
              </div>
      
              <div>
                  <label>Password</label>
                  <input name='password' type='password'>
              </div>
      
              <button>Submit</button>
          </form> 
        `);
    }
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === "asd" && password === "qwe") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send(`
      <div> 
      <div>You must provide correct email and password</div>
      <div>
          <a href='/auth/login'>Login</a>
      </div>
      </div>
      `);
    }
  }

  @get("/logout")
  getLoggout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
