import { Authorization, Domain } from '~utils/env-config';

const setCookie = (cookieName, cookieValue, expiresDay) => {
  const d = new Date();
  d.setTime(d.getTime() + expiresDay * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue};${expires};domain=${Domain};path=/`;
};

const deleteCookies = () => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }
};

export const useAuth = () => {
  const saveCookie = (token) => setCookie(Authorization, `Bearer ${token}`, 7);
  const clearCookie = () => deleteCookies();
  return { saveCookie, clearCookie };
};
