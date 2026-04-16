document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const statusDiv = document.getElementById("status");
  const loadDataBtn = document.getElementById("loadDataBtn");
  const dataOutput = document.getElementById("dataOutput");

  const currentUser = getCurrentUser();

  if (currentUser) {
    statusDiv.innerHTML = `
      <p><strong>Usuario:</strong> ${currentUser.user}</p>
      <p><strong>Rol:</strong> ${currentUser.role}</p>
      <p><strong>Sesión iniciada:</strong> ${currentUser.loginAt}</p>
    `;
  } else {
    statusDiv.innerHTML = "<p>No hay sesión iniciada.</p>";
  }

  loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const result = login(username, password);

    if (result.success) {
      loginMessage.textContent = "Login correcto";
      loginMessage.style.color = "green";

      const user = getCurrentUser();
      statusDiv.innerHTML = `
        <p><strong>Usuario:</strong> ${user.user}</p>
        <p><strong>Rol:</strong> ${user.role}</p>
        <p><strong>Sesión iniciada:</strong> ${user.loginAt}</p>
      `;
    } else {
      loginMessage.textContent = result.message;
      loginMessage.style.color = "red";
    }
  });

  loadDataBtn.addEventListener("click", async () => {
    const data = await fetchData();
    dataOutput.textContent = JSON.stringify(data, null, 2);
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => logEvent("success", "Service Worker registrado"))
      .catch(() => logEvent("error", "No se pudo registrar el Service Worker"));
  }
});