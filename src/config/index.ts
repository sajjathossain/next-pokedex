/** @format */

const conf = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_APP_HOST
      : '',
};
export default conf;
