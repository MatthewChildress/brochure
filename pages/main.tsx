import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav"
import Header from "../components/header"
import Layout from "../components/layout";
import Container from "../components/container";

const Main: NextPage = (props: any) => {
	return (
		<Layout>
			<Head>
				<title>Placeholder</title>
			</Head>
			<Container>
                <Nav />
                <Header />
			</Container>
		</Layout>

	);
};

export default Main;
