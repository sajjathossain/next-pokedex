/** @format */

import config from 'config';

export const makePublicUrl = (path: string) => {
  return `${config.baseUrl}${path}`;
};
