// filepath: /Users/gururamu/Documents/personal/interview/jira/api/src/middleware/response.ts
import { Response, Request, NextFunction } from 'express';

export const addRespondToResponse = (_req: Request, res: Response, next: NextFunction): void => {
  (res as any).respond = (body: any) => {
    res.json(body);
  };
  next();
};