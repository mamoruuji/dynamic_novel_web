const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
