import { NextFunction, Request, Response, Router } from "express";

const catalogRouter: Router = Router();

// endpoints

catalogRouter.post(
    "/products",
    async (req: Request, res: Response, next: NextFunction) => {}
);

export { catalogRouter as catalogRoute };
