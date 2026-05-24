import 'express-serve-static-core';

declare module 'express-serve-static-core' {
  interface Response {
    ok: <T>(data: T, message?: string) => Response;
    created: <T>(data: T, message?: string) => Response;
    error: (error: Error | string, statusCode?: number) => Response;
  }
}