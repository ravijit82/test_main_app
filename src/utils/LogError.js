function LogError(error) {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.error("App Custom Error", error);
  }
}

export default LogError;
