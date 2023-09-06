import './globals.css';
import { Poppins } from 'next/font/google';
import { AOSinit } from './aos';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AOSinit />
			<head>
				<title>Adhitya Bagus Wicaksono</title>
				<meta
					name="description"
					content="UI/UX Designer & Front End Website Developer"
				/>
				<meta
					name="author"
					content="Adhitya Bagus Wicaksono"
				/>
				<link
					rel="icon"
					href="/picture/beranda/logoAbwBlue.svg"></link>
				<meta
					property="og:title"
					content="Adhitya Bagus Wicaksono Web"
				/>
				<meta
					property="og:description"
					content="UI/UX Designer & Front End Website Developer"
				/>
				<meta
					property="og:image"
					content="/picture/beranda/logoAbwBlue.svg"
				/>
			</head>
			<body className={poppins.className}>
				<div className="relative bg-white h-full overflow-y-auto">
					{children}
				</div>
			</body>
		</html>
	);
}
