import React, {  useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

import bgImg from './assets/Frame 1.jpg';

const lorem =
	'	Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid in, aliquam corporis veritatis corrupti labore porro, iure a reprehenderit obcaecati enim aspernatur aperiam optio unde rem sint explicabo perspiciatis placeat ipsa. Quas, quos! Nemo ducimus, expedita, dignissimos deleniti libero dolor sit aspernatur nesciunt deserunt impedit repellendus ipsa magnam quas possimus, beatae ratione necessitatibus architecto unde ipsum doloribus odit ipsam? Tenetur mollitia esse cum, fugit voluptatibus totam ratione nulla consequatur at rerum dolorum in explicabo ad facere hic cupiditate qui id, et labore magni! Magni et sapiente amet autem labore veniam, assumenda delectus repudiandae vero ea voluptatem sequi accusantium culpa quo.';

const App = () => {
	const [page1, page1InView] = useInView({ threshold: 0.5 });
	const [page2, page2InView] = useInView({ threshold: 0.5 });
	const [page3, page3InView] = useInView({ threshold: 0.5 });
	const [page4, page4InView] = useInView({ threshold: 0.5 });

	const [state, setState] = useState(0);
	const ref = useRef();

	const handleClick = (e) => {
		e.preventDefault();
		setState(state + 100);
	};

	useEffect(() => {
		gsap.to(ref.current, { y: -state, duration: 1 });
	}, [state]);

	useEffect(() => {
		if (page1InView) setState(0);
		if (page2InView) setState(200);
		if (page3InView) setState(400);
		if (page4InView) setState(600);
		return () => {};
	}, [page1InView, page2InView, page3InView, page4InView]);

	const el = useRef();
	const q = gsap.utils.selector(el);

	useEffect(() => {
		gsap.fromTo(
			q('.link'),
			{
				y: -100,
			},
			{
				y: 0,
				stagger: 0.2,
			}
		);
	}, []);

	return (
		<>
			<img src={bgImg} alt='' className='bg' ref={ref} />
			<nav>
				<div className='toolbar'>
					<h2 className='logo'>Adrian</h2>
					<div className='links' ref={el}>
						<a href='#page1' className='link'>
							Page 1
						</a>
						<a href='#page2' className='link'>
							Page 2
						</a>
						<a href='#page3' className='link'>
							Page 3
						</a>
						<a href='#page4' className='link'>
							Page 4
						</a>
					</div>
				</div>
			</nav>
			<div className='App'>
				<button onClick={handleClick} className='btn'>
					translateY
				</button>
				<div className='page' ref={page1} id='page1'>
					<h1>PAGE 1</h1>
					<p>{lorem}</p>
				</div>
				<div className='page' ref={page2} id='page2'>
					<h1>PAGE 2</h1>
					<p>{lorem}</p>
				</div>
				<div className='page' ref={page3} id='page3'>
					<h1>PAGE 3</h1>
					<p>{lorem}</p>
				</div>
				<div className='page' ref={page4} id='page4'>
					<h1>PAGE 4</h1>
					<p>{lorem}</p>
				</div>
			</div>
		</>
	);
};

export default App;
