/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add your custom webpack configuration here
    config.module.rules.push({
      test: /\.(wav)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "sound.wav",
            outputPath: "assets",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
