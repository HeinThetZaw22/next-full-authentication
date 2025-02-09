/**
 * Public route that does not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * Auth route that will redirect logged in user to settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login", 
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

/**
 * Prefix for api auth routes.
 * Route with this prefix are used for api auth purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
