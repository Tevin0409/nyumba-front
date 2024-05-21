/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dvy00x8ss",
    NEXT_BASE_URL: "http://localhost:5000/api",
    NEXT_SESSION_SECRET: "fM65MS6Bd4WOBogxzoWXbDkJMr+mQ7RypNsqWoOfAug=",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1IjoidGV2aW4tb2JhaSIsImEiOiJja3Z4OHd5NTgwcno3MnZwaGZ2MXc1cHI3In0.x8lltjXDmlUEKsDEwxAFPw",
    NEXT_EDGE_STORE_ACCESS_KEY: "vjfaAL5WbwdvdkwXwkH8C2P7Ivsvpk88",
    EDGE_STORE_SECRET_KEY: "QtEoHiFLJ4c2vgfByrevNGWBfA7AAWjcFelUFtL7UW236BgD",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
