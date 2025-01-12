import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host-app',
        remotes: {
          remoteApp: 'remoteApp@http://localhost:3002/remoteEntry.js'
        },
        filename: 'static/chunks/remoteEntry.js',
        extraOptions: {},
      })
    )
    return config
  },
};

export default nextConfig;
