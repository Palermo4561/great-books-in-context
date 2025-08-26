import axios from 'axios'

const kitInstance = axios.create({
  baseURL: 'https://api.kit.com',
  timeout: 1000,
  headers: { 'X-Kit-Api-Key': import.meta.env.VITE_KIT_API_KEY },
})

export { kitInstance }
