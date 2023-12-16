import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://d3oy8qxzlj068u.cloudfront.net',
  headers: {
    'Content-Type': 'application/json',
  },
});
