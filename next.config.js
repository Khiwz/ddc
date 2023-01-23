/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  env: {
    // NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
    NEXT_PUBLIC_SITE_URL: "https://ddcgroups.com",
    NEXT_PUBLIC_DB_URL:
      "mongodb+srv://admin:admin@cluster0.g6npc.mongodb.net/?retryWrites=true&w=majority",
    NEXT_PUBLIC_DB_NAME: "ddcgroups",
    NEXT_PUBLIC_CAREER_COLLECTION: "career",
    NEXT_PUBLIC_ENCRYPTED_MESSAGE: "ddc encrypted password",
    NEXT_PUBLIC_NEWS_COLLECTION: "news",
    NEXT_PUBLIC_USER_COLLECTION: "user",
    NEXT_PUBLIC_UPLOAD_FILE_SIZE: 5120,
    NEXT_PUBLIC_API_KEY: "AIzaSyD7SrOFLFDeuv18fB22bSF7Y9wHS3zKzUM",
    NEXT_PUBLIC_AUTH_DOMAIN: "ddcgroups.firebaseapp.com",
    NEXT_PUBLIC_PROJECT_ID: "ddcgroups",
    NEXT_PUBLIC_STORAGE_BUCKET: "ddcgroups.appspot.com",
    NEXT_PUBLIC_MESSAGING_SENDER_ID: "463969136248",
    NEXT_PUBLIC_APP_ID: "1:463969136248:web:178758b81923fc20e5878d",
    NEXT_PUBLIC_GMAIL: "ddcgrouplao@gmail.com",
    NEXT_PUBLIC_NODEMAILER_PWD: "kiijabwihlujdlce",
  },
};

module.exports = nextConfig;
