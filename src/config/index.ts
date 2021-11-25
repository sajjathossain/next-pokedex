/** @format */

const conf = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_APP_HOST
      : window.location.host,
};
export default conf;
