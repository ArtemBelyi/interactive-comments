export const SUCCESS_MESSAGES = {
  REQUEST_SUCCESS: "Request completed successfully",
  USER_CREATED: "User created successfully",
  USER_UPDATED: "User updated successfully",
  USER_DELETED: "User deleted successfully",
  COMMENT_CREATED: "Comment created successfully",
  COMMENT_UPDATED: "Comment updated successfully",
  COMMENT_DELETED: "Comment deleted successfully",
  LOGIN: "Login successful"
};

export const ERROR_MESSAGES = {
  VALIDATION_FAILED: "Validation failed",
  SERVER: "Internal Server Error",
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "User already exists",
  INVALID_CREDENTIALS: "Invalid email or password",
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "Access forbidden",

   REQUIRED: {
    USERNAME: "Username is required",
    CONTENT: "Content is required",
  },
  
  INVALID: {
    USERNAME: "Username must be at least 4 characters",
    CONTENT: "Content must be at least 4 characters",
  }
};