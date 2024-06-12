import axios from 'axios';

export const formSubmitApi = axios.create({
  baseURL: 'https://formsubmit.co',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
