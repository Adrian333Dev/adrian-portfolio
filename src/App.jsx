import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

// ! COMPONENTS
import { Navbar } from './components';

// ! SECTIONS
import { About, Hero, Skills, Work, Contact } from './container/index';

// ! STYLES
import { BgImg, Container } from './styles/styles';

// ! ASSETS
import bg1 from './assets/images/bg1.jpg';

const App = () => {
	const [sec1, sec1InView] = useInView({ threshold: 0.5 });
	const [sec2, sec2InView] = useInView({ threshold: 0.5 });
	const [sec3, sec3InView] = useInView({ threshold: 0.5 });
	const [sec4, sec4InView] = useInView({ threshold: 0.5 });
	const [sec5, sec5InView] = useInView({ threshold: 0.5 });

	const [y, setY] = useState(0);
	const bgRef = useRef();

	const [active, setActive] = useState('');

	useEffect(() => {
		gsap.to(bgRef.current, { y: -y, duration: 0.5 });
	}, [y]);

	useEffect(() => {
		if (sec1InView) {
			setY(0);
			setActive('Hero');
		}
		if (sec2InView) {
			setY(100);
			setActive('About');
		}
		if (sec3InView) {
			setY(200);
			setActive('Skills');
		}
		if (sec4InView) {
			setY(300);
			setActive('Work');
		}
		if (sec5InView) {
			setY(400);
			setActive('Contact');
		}
	}, [sec1InView, sec2InView, sec3InView, sec4InView, sec5InView]);

	return (
		<>
			<BgImg src={bg1} ref={bgRef} />
			<Navbar active={active} />
			{/* // ! Body */}
			<Container>
				<Hero ref={sec1} />
				<About ref={sec2} />
				<Skills ref={sec3} />
				<Work ref={sec4} />
				<Contact ref={sec5} />
			</Container>
		</>
	);
};

export default App;
