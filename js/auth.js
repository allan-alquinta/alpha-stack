function login(username, password) {
  if (username === "admin" && password === "1234") {
    const token = generateMockJWT({
      user: username,
      role: "admin",
      loginAt: new Date().toISOString()
    });

    localStorage.setItem("alpha_token", token);
    logEvent("success", "Inicio de sesión exitoso");
    return { success: true, token };
  }

  logEvent("warning", "Intento de inicio de sesión fallido");
  return { success: false, message: "Credenciales incorrectas" };
}

function getCurrentUser() {
  const token = localStorage.getItem("alpha_token");
  if (!token) return null;
  return parseMockJWT(token);
}