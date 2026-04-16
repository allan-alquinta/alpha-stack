function generateMockJWT(payload) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = btoa(JSON.stringify(payload));
  const signature = btoa("mock-signature");
  return `${header}.${body}.${signature}`;
}

function parseMockJWT(token) {
  try {
    const parts = token.split(".");
    return JSON.parse(atob(parts[1]));
  } catch (error) {
    logEvent("error", "Token inválido");
    return null;
  }
}