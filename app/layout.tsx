import type { Metadata } from 'next';
import { Overpass } from 'next/font/google';
import './globals.css';

const inter = Overpass({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sotwebdev - Front End developer',
	description: 'Lets create your website togheter.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body className={`${inter.className} `}>{children}</body>
		</html>
	);
}
