import Hero from './Hero';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/section/Section';

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />

			<main className='xl:ml-[50%]'>
				<Hero />
			</main>
		</>
	);
}
