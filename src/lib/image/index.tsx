/** @format */

import config from 'config';

export const getLocalImagePath = (imageName: string): string => {
  return `${config.baseUrl}/images/${imageName}`;
};
