import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Container from "../components/container";

const Home: NextPage = (props: any) => {
	return (
		<Layout>
			<Head>
				<title>Placeholder</title>
			</Head>
			<Container>
				<Hero />
			</Container>
		</Layout>

	);
};

export default Home;
