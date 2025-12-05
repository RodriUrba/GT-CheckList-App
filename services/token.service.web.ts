import { API_CONFIG } from '../config/api';

/**
 * Token storage service for the web using localStorage.
 * This implementation provides the same async interface as the native TokenService.
 */
export class TokenService {
  /**
   * Save access token to localStorage
   */
  static async saveAccessToken(token: string): Promise<void> {
    try {
      localStorage.setItem(API_CONFIG.TOKEN_KEYS.ACCESS_TOKEN, token);
      return Promise.resolve();
    } catch (error) {
      console.error('Error saving access token to localStorage:', error);
      throw error;
    }
  }

  /**
   * Get access token from localStorage
   */
  static async getAccessToken(): Promise<string | null> {
    try {
      const token = localStorage.getItem(API_CONFIG.TOKEN_KEYS.ACCESS_TOKEN);
      return Promise.resolve(token);
    } catch (error) {
      console.error('Error getting access token from localStorage:', error);
      return Promise.resolve(null);
    }
  }

  /**
   * Save refresh token to localStorage
   */
  static async saveRefreshToken(token: string): Promise<void> {
    try {
      localStorage.setItem(API_CONFIG.TOKEN_KEYS.REFRESH_TOKEN, token);
      return Promise.resolve();
    } catch (error) {
      console.error('Error saving refresh token to localStorage:', error);
      throw error;
    }
  }

  /**
   * Get refresh token from localStorage
   */
  static async getRefreshToken(): Promise<string | null> {
    try {
      const token = localStorage.getItem(API_CONFIG.TOKEN_KEYS.REFRESH_TOKEN);
      return Promise.resolve(token);
    } catch (error) {
      console.error('Error getting refresh token from localStorage:', error);
      return Promise.resolve(null);
    }
  }

  /**
   * Save both tokens at once
   */
  static async saveTokens(accessToken: string, refreshToken: string): Promise<void> {
    await Promise.all([
      this.saveAccessToken(accessToken),
      this.saveRefreshToken(refreshToken),
    ]);
  }

  /**
   * Clear all tokens from localStorage (logout)
   */
  static async clearTokens(): Promise<void> {
    try {
      localStorage.removeItem(API_CONFIG.TOKEN_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(API_CONFIG.TOKEN_KEYS.REFRESH_TOKEN);
      return Promise.resolve();
    } catch (error) {
      console.error('Error clearing tokens from localStorage:', error);
      throw error;
    }
  }

  /**
   * Check if user has valid tokens in localStorage
   */
  static async hasTokens(): Promise<boolean> {
    const accessToken = await this.getAccessToken();
    return !!accessToken;
  }
}
