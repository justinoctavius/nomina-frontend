import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://d142lon7ibjq3j.cloudfront.net',
  headers: {
    'Content-Type': 'application/json',
  },
});
