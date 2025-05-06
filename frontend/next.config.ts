// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {  
//   /* config options here */
//   webpack:(config) => {
//     config.resolve.alias.canvas = false;
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     })
//     return config
//   },
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Cross-Origin-Opener-Policy",
//             value: "same-origin-allow-popups", // Fixes OAuth issue
//           },
//           {
//             key: "Cross-Origin-Embedder-Policy",
//             value: "require-corp",
//           },
//         ],
//       },
//     ];
//   },
//   images:{
//     domains:['lh3.googleusercontent.com']
//   }
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
  /* config options here */
  webpack:(config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // Fixes OAuth issue
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },
  images:{
    domains:['lh3.googleusercontent.com']
  }
};

export default nextConfig;
