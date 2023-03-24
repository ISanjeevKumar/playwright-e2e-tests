export interface UiConfig {
  baseUrl: string;
}

/**
 * Configuration object for non-production environment.
 * @type {object}
 */
const productionConfig: UiConfig = {
  baseUrl: "https://www.saucedemo.com/",
};

/**
 * Gets the configuration object for the specified environment.
 * @param {string} environment - The environment for which to get the configuration.
 * @returns {object} The configuration object for the specified environment.
 * @throws {Error} If the specified environment is invalid.
 */
export function getUiConfig(environment: string): UiConfig {
  switch (environment) {
    case "production":
      return productionConfig;
    default:
      throw new Error(
        `Invalid environment ${environment} type. Please check the environment`
      );
  }
}
