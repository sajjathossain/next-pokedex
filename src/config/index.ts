const conf = {
    baseUrl: process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_APP_HOST : location.host
}
export default conf