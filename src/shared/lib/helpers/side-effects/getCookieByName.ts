export function getCookieByName(name: string) {
  const nameWithEquals = name + '=';
  const cookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith(nameWithEquals));
  return cookie ? cookie.substring(nameWithEquals.length) : null;
}
