import express from "express";

export class AppRouter {
  private static routerInstance: express.Router;

  static get instance(): express.Router {
    if (AppRouter.routerInstance) {
      return AppRouter.routerInstance;
    }
    return (AppRouter.routerInstance = express.Router());
  }
}
