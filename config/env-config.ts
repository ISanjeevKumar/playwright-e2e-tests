export interface EnvConfig {
  baseUrl: string;
  // Add other properties as needed
}

/**
 * Configuration object for non-production environment.
 * @type {object}
 */
const productionConfig: EnvConfig = {
  baseUrl: "https://www.saucedemo.com/",
};

/**
 * Gets the configuration object for the specified environment.
 * @param {string} environment - The environment for which to get the configuration.
 * @returns {object} The configuration object for the specified environment.
 * @throws {Error} If the specified environment is invalid.
 */
export function getConfig(environment: string): EnvConfig {
  switch (environment) {
    case "production":
      return productionConfig;
    default:
      throw new Error(
        `Invalid environment ${environment} type. Please check the environment`
      );
  }
}
