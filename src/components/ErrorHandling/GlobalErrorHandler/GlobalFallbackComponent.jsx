function GlobalFallbackComponent({ error }) {
  return (
    <div>
      <p>{error.message}</p>
      <p>
        Something went wrong with the application! Please try to refresh the
        page or return to home page
      </p>
    </div>
  );
}

export default GlobalFallbackComponent;
