// @ts-nocheck
export const BASE_URL = "https://norma.nomoreparties.space/api/";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Номер ошибки: ${res.status}`);
};
