import axios from 'axios';
const Cors = require('module-name');

import initMiddleware from '../../../common/utils/helpers/api/middleware';

const API_URL = process.env.API_URL as string;
const API_KEY = process.env.API_KEY as string;

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  }),
);

export default async (_req: any, res: any) => {
  try {
    await cors(_req, res);
    const { data } = await axios.get(
      `${API_URL}/topstories/v2/science.json?${API_KEY}`,
    );
    res.json(data);
  } catch (error) {
    switch (error.response.status) {
      case 429:
        return res.json({ status: 'Too Many Requests' });
      case 404:
        res.json({ status: 'Not found' });
    }
  }
};
