'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSinit = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-sine',
		});
	}, []);
};
