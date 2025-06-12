/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configures Next.js to export static HTML
  // Optional: Add a trailing slash to all paths (useful for some static hosting)
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig