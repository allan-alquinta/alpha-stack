function logEvent(type, message) {
  const logs = JSON.parse(localStorage.getItem("alpha_logs")) || [];
  const newLog = {
    type,
    message,
    timestamp: new Date().toISOString()
  };
  logs.push(newLog);
  localStorage.setItem("alpha_logs", JSON.stringify(logs));
  console.log(`[${type}] ${message}`);
}