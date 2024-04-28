import { API_URL } from '../config/API_URL';

export const fetchFunction = async ({
  endpoint,
  method,
  CT = 'application/json',
  body,
}) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': CT,
  };

  const res = await fetch(API_URL + endpoint, {
    method,
    headers,
    body,
  });

  const response = await res.json();

  return {
    status: res.status,
    response,
  };
};
