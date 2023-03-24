export interface ApiConfig {
  apiBaseUrl: string;
  userEndpoint: string;
  createUserEndpoint: string;
}

/**
 * Configuration object for non-production environment.
 * @type {object}
 */
const apiProductionConfig: ApiConfig = {
  apiBaseUrl: "https://reqres.in",
  userEndpoint: "/api/users?page=2",
  createUserEndpoint: "/api/users"
};

/**
 * Gets the configuration object for the specified environment.
 * @param {string} environment - The environment for which to get the configuration.
 * @returns {object} The configuration object for the specified environment.
 * @throws {Error} If the specified environment is invalid.
 */
export function getApiConfig(environment: string): ApiConfig {
  switch (environment) {
    case "production":
      return apiProductionConfig;
    default:
      throw new Error(
        `Invalid environment ${environment} type. Please check the environment`
      );
  }
}
