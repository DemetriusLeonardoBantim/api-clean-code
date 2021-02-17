import { HttpResponse } from '../protocols/http';

export const badRequest = (error: Error) => {
  return {
    statusCode: 400,
    body: error,
  };
};
