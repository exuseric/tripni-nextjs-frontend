export class APIError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean; // Indicates if this is an error the client can react to

  constructor(message: string = "An unexpected API error occurred.", statusCode: number = 500, name: string = "APIError") {
    super(message);
    this.name = name;
    this.statusCode = statusCode;

    // This line is essential for proper stack trace capture in TypeScript/Node.js
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      // Fallback for environments where captureStackTrace is not available
      this.stack = new Error(message).stack;
    }

    // Operational errors are typically client-related (4xx) or expected server-side issues (e.g., service unavailable 503).
    // Non-operational errors are usually unhandled bugs in the code (e.g., 500 without specific handling).
    this.isOperational = (statusCode >= 400 && statusCode < 500) || statusCode === 503;
  }
}

const DEFAULT_ERROR_MESSAGES = {
  BadRequest: "Bad Request",
  Unauthorized: "Unauthorized",
  Forbidden: "Forbidden",
  NotFound: "Not Found",
  InternalServerError: "Internal Server Error",
  ServiceUnavailable: "Service Unavailable",
};

export class BadRequestError extends APIError {
  constructor(message: string = DEFAULT_ERROR_MESSAGES.BadRequest) {
    super(message, 400, "BadRequestError");
  }
}

export class UnauthorizedError extends APIError {
  constructor(message: string = DEFAULT_ERROR_MESSAGES.Unauthorized) {
    super(message, 401, "UnauthorizedError");
  }
}

export class ForbiddenError extends APIError {
  constructor(message: string = DEFAULT_ERROR_MESSAGES.Forbidden) {
    super(message, 403, "ForbiddenError");
  }
}

export class NotFoundError extends APIError {
  constructor(message: string = DEFAULT_ERROR_MESSAGES.NotFound) {
    super(message, 404, "NotFoundError");
  }
}

export class InternalServerError extends APIError {
  constructor(message: string = DEFAULT_ERROR_MESSAGES.InternalServerError) {
    super(message, 500, "InternalServerError");
  }
}

export class ServiceUnavailableError extends APIError {
  constructor(message: string = DEFAULT_ERROR_MESSAGES.ServiceUnavailable) {
    super(message, 503, "ServiceUnavailableError");
  }
}

export const API_ERROR: { [key: number]: typeof APIError } = {
  400: BadRequestError,
  401: UnauthorizedError,
  403: ForbiddenError,
  404: NotFoundError,
  500: InternalServerError,
  503: ServiceUnavailableError,
};
