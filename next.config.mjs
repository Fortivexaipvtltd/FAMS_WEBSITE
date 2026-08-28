/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> produces a plain `out/` folder of HTML/CSS/JS.
  // Upload the contents of `out/` to the subdomain's document root.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
