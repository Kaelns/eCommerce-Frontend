export const consoleWarnError = (error: unknown): void => {
  if (error instanceof Error) {
    console.warn(error.message);
  }
};
