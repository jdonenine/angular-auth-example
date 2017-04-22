export class ValidationUtils {
  private static EMAIL_PATTERN = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
  private static EMAIL_REGEXP = new RegExp(ValidationUtils.EMAIL_PATTERN);

  static validateEmail(email: string): boolean {
    return (email && ValidationUtils.EMAIL_REGEXP.test(email.trim()));
  }

  static validatePassword(password: string): boolean {
    return (password && password.length > 0);
  }

  static validateToken(token: string): boolean {
    return (token && token.length > 0);
  }
}
