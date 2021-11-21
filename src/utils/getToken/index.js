import cookies from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const accessToken = cookies.load('user')
export const idUser = accessToken && jwt_decode(accessToken).UserId
export const userName = accessToken && jwt_decode(accessToken).UserName