import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import {
	Navbar,
	Hero,
	About,
	Skills,
	Work,
	Contact,
	SocialIcons,
} from './constants/components';
import { Container } from './styles/styles';

const App = () => {
	const [sec1, sec1In] = useInView({ threshold: 0.5 });
	const [sec2, sec2In] = useInView({ threshold: 0.5 });
	const [sec3, sec3In] = useInView({ threshold: 0.5 });
	const [sec4, sec4In] = useInView({ threshold: 0.5 });
	const [sec5, sec5In] = useInView({ threshold: 0.5 });

	const [bgPos, setBgPos] = useState('sec1');

	const handleScroll = (n) => {
		for (let i = 0; i <= n; i++) {
			setTimeout(() => {
				console.log(i);
			}, 1000);
		}
	};

	handleScroll(20);

	useEffect(() => {
		if (sec1In) setBgPos('sec1');
		else if (sec2In) setBgPos('sec2');
		else if (sec3In) setBgPos('sec3');
		else if (sec4In) setBgPos('sec4');
		else if (sec5In) setBgPos('sec5');
	}, [sec1In, sec2In, sec3In, sec4In, sec5In]);

	return (
		<>
			<Navbar />
			<SocialIcons />
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
