async function fetchData() {
  try {
    const cached = getFromCache("alpha_data");
    if (cached) {
      logEvent("info", "Datos cargados desde caché");
      return cached;
    }

    const response = await fetch("data/db.json");
    const data = await response.json();

    saveToCache("alpha_data", data);
    logEvent("info", "Datos cargados desde archivo JSON");
    return data;
  } catch (error) {
    logEvent("error", "Error al cargar datos");
    return { error: "No se pudieron cargar los datos" };
  }
}