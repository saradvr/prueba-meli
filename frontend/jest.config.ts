import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  collectCoverageFrom: [
    "**/*.{tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/*.{ts}",
  ],
};
export default config;
