export const SUCCESS_MESSAGES = {
  REQUEST_SUCCESS: "Request completed successfully",
  USER_CREATED: "User created successfully",
  USER_UPDATED: "User updated successfully",
  USER_DELETED: "User deleted successfully",
  COMMENT_CREATED: "Comment created successfully",
  COMMENT_UPDATED: "Comment updated successfully",
  COMMENT_DELETED: "Comment deleted successfully",
  LOGIN: "Login successful",
  LOGOUT: "Logout successful",
  TOKEN_REFRESHED: "Token refreshed successfully",
  PASSWORD_RESET: "Password reset successfully",
  EMAIL_VERIFIED: "Email verified successfully"
};

export const ERROR_MESSAGES = {
  VALIDATION_FAILED: "Validation failed",
  SERVER: "Internal Server Error",
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "User already exists",
  INVALID_CREDENTIALS: "Invalid email or password",
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "Access forbidden",

  AUTH: {
    TOKEN_NOT_PROVIDED: "Token not provided",
    TOKEN_NOT_FOUND_IN_COOKIE: "Token not found in cookie",
    TOKEN_INVALID: "Invalid or expired token",
    TOKEN_EXPIRED: "Token has expired",
    TOKEN_MALFORMED: "Malformed token",
    INVALID_TOKEN_FORMAT: "Invalid token format",
    TOKEN_VERIFICATION_FAILED: "Token verification failed",
    REFRESH_TOKEN_NOT_FOUND: "Refresh token not found",
    REFRESH_TOKEN_INVALID: "Invalid refresh token",
    
    SESSION_EXPIRED: "Session expired. Please login again",
    ACCOUNT_LOCKED: "Account is locked. Too many failed attempts",
    ACCOUNT_NOT_VERIFIED: "Account not verified. Please check your email",
    ACCOUNT_SUSPENDED: "Account has been suspended",
    
    PASSWORD_RESET_REQUIRED: "Password reset required",
    PASSWORD_TOO_WEAK: "Password is too weak",
    PASSWORD_MISMATCH: "Passwords do not match",
    OLD_PASSWORD_INCORRECT: "Old password is incorrect",
    
    TWO_FACTOR_REQUIRED: "Two-factor authentication required",
    TWO_FACTOR_INVALID: "Invalid two-factor authentication code",
    
    SOCIAL_LOGIN_FAILED: "Social login failed",
    EMAIL_ALREADY_VERIFIED: "Email already verified",
    VERIFICATION_TOKEN_INVALID: "Verification token is invalid or expired"
  },

  REQUIRED: {
    USERNAME: "Username is required",
    CONTENT: "Content is required",
    EMAIL: "Email is required",
    PASSWORD: "Password is required",
    TOKEN: "Token is required",
    REFRESH_TOKEN: "Refresh token is required"
  },
  
  INVALID: {
    USERNAME: "Username must be at least 4 characters",
    CONTENT: "Content must be at least 4 characters",
    EMAIL: "Invalid email format",
    PASSWORD: "Password must be at least 6 characters",
    PASSWORD_WEAK: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
  },

  STATUS: {
    400: "Bad Request",
    401: "Unauthorized. Please authenticate",
    403: "Forbidden. You don't have permission",
    404: "Resource not found",
    429: "Too many requests. Please try again later",
    500: "Internal server error"
  }
};