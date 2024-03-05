import axios from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Função para obter o token da sessão
const getToken = async () => {
  const session = await getSession();
  if (session) {
    return session.user.authToken;
  }
  return null;
};

// Adicione um interceptor para todas as requisições
api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;