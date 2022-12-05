import axios from 'axios';
import {
  DATA_TYPES,
  POSTS_URL,
  USERS_URL,
} from '../constants/http';

const URLS = {
  [DATA_TYPES.POSTS]: POSTS_URL,
  [DATA_TYPES.USERS]: USERS_URL,
};
export const fetchDataApi = async ({
  query,
  type = DATA_TYPES.POSTS,
}) =>
  await axios.get(`${URLS[type]}${query}`);
