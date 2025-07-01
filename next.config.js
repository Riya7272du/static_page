/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true,
    },
    images: {
        domains: [], // Add any external image domains here if needed
        formats: ['image/webp', 'image/avif'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Enable static optimization
    output: 'standalone',
    // Optimize for performance
    swcMinify: true,
}

module.exports = nextConfig