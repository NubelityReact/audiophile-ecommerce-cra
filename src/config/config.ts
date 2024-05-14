export const config = {
  secret: process.env.SECRET || "",
  SMTP_SERVER: process.env.SMTP_SERVER,
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
};
