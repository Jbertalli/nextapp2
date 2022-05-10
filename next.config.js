// restart server whenever changes made in next.config
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://JulianBertalli9:Illatreb96@nextapp2.gxobk.mongodb.net/nextapp2?retryWrites=true&w=majority",
    JWT_SECRET: "Illatreb96"
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};
