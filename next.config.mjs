/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
				port: '',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
