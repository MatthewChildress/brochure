import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from '../styles/theme';

const Home: NextPage = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Layout>
				<Head>
					<title>Placeholder</title>
				</Head>
				<Container></Container>
			</Layout>
		</ThemeProvider>
	);
};

export default Home;
