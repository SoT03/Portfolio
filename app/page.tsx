import Hero from './components/Hero';
import { Urbanist } from 'next/font/google';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

const inter = Urbanist({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />

			<main className={`${inter.className} xl:ml-[50%]`}>
				<Hero />
				<AboutMe />
				<Projects />
			</main>
			<Contact />
		</>
	);
}
