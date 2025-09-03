function parsePath(path) {
  if (typeof path !== "string") {
    return "";
  }
  
  const match = path.match(/\/([^/]+)$/);
  
  return match ? match[1] : "";
}
