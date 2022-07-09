import { NextPage } from "next";
import Image from "next/image";
import splash from "../public/assets/splash-image.webp";
import styled from "styled-components";

export const HeroContainer = styled.section`
	display: flex;
	flex-direction: row-reverse;
	background-image: url(${(props) => props.image.src});
	background-size: cover;
	background-repeat:no-repeat;
	letter-spacing: 0.25em;
	line-height: 3rem;
	width: 100vw;
	height: 100vh;
	margin: 0;

	.hero {
		display:flex;
		justify-content:center;
		align-items:center;
		width: 40%;
		height:100vh;
		background-color: rgba(0, 0, 0, 0.7);
	}

	.hero__box {
		width:65%;
	}

	.hero__box__title {

	}

	.hero__box__call {
		display:flex;
		flex-direction:column;
		width:75%;
	}

	.hero__box__button {
		margin-top:1rem;
		width: 12rem;
		height:5rem;
		border-radius:0.25rem;
		border:1px solid rgba(3, 24, 11, 0.098);
		background: rgb(106, 155, 125);
		color: rgb(0,0,0);
		font-size:1.5rem;
	}
1
	a {
		text-decoration:none;
	}
`;

const Hero: NextPage = (props: any) => {
	return (
		<HeroContainer image={splash}>
			<div className="hero">
				<div className="hero__box">
					<h1 className="hero__box__title">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam et quas commodi reprehenderit consectetur. Repellat cupiditate nihil saepe sequi blanditiis?
					</h1>
					<br /><br />
					<div className="hero__box__call">
						<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h2>
						<button className="hero__box__button"><a href="/main">Get A Quote Today!</a></button>
					</div>
				</div>
			</div>
		</HeroContainer>
	);
};

export default Hero;
