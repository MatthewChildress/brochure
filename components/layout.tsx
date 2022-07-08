import { NextPage } from "next";
import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";

const Layout: NextPage = () => {
	return (
		<>
			<Seo />
			<Header />
			<div>
				<main></main>
			</div>
			<Footer />
		</>
	)
};

export default Layout;
