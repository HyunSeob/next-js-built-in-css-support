/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.unshift({
      loader: `babel-loader`,
      test: /\.m?js$/,
      include: (filePath) => {
        return !filePath.includes(`node_modules`);
      },
    });

    return config;
  },
};

module.exports = nextConfig;
