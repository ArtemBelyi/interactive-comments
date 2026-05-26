import 'express-serve-static-core';

export interface ErrorWithErrors extends Error {
  errors?: unknown;
}

declare module 'express-serve-static-core' {
  interface Response {
    ok: <T>(data: T, message?: string) => Response;
    created: <T>(data: T, message?: string) => Response;
    error: (error: ErrorWithErrors | Error | string, statusCode?: number) => Response;
  }
}