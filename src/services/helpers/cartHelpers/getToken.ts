export function getToken(): string {
  const anonToken = localStorage.getItem('AnonToken')!;
  const userToken = localStorage.getItem('Token');
  return userToken ?? anonToken;
}
