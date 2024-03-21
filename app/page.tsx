import Hero from './Hero';
import { Urbanist } from 'next/font/google';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navbar from './components/Navbar';

import Section from './components/section/Section';

const inter = Urbanist({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />

			<main className={`${inter.className} xl:ml-[50%]`}>
				<Hero />
				<AboutMe />
			</main>
		</>
	);
}
