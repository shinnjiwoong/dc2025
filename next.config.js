/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-ancestors 'self' *; frame-src 'self' *;",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
