function optimizeImageMock(fileName) {
  logEvent("info", `Imagen procesada: ${fileName}`);
  return {
    original: fileName,
    optimized: `optimized_${fileName}`,
    status: "success"
  };
}