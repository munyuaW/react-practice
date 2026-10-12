const capitalizeText = (text) =>
  text.toLowerCase().replace(/(^|\s)\w/g, (c) => c.toUpperCase());

const validateName = (value) => {
  const cleanedVal = value.trim();
  if (!cleanedVal) return "Name field may not be empty.";

  const regex = /^[a-zA-Z ']+$/;
  if (!regex.test(cleanedVal)) {
    return "Invalid name. Name may not contain numbers, special characters(except spaces and apostrophes)";
  }

  return "valid name";
};

const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error setting data in localStorage for "${key}"`, error);
    return false;
  }
};

const readFromLocalStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error(
      `Error retrieving data from local storage for "${key}"`,
      error
    );
    return null;
  }
};

export {
  capitalizeText,
  validateName,
  saveToLocalStorage,
  readFromLocalStorage,
};
