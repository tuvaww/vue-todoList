export const getStorage = () => {
  return JSON.parse(localStorage.getItem("storedTodos") || "[]");
};

export const test = () => {
  window.onload = () => {
    localStorage.setItem("storedTodos", "[]");
  };
};
