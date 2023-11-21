const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: false,
            },
        ]
    },
});


module.exports = nextConfig;
