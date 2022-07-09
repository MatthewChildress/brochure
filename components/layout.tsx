import { NextPage } from "next";
import Footer from "./footer";
import Seo from "./seo";
import styled from "styled-components";

const LayoutContainer = styled.main``

const Layout: NextPage = (props: any) => {
	return (
		<>
			<Seo />
			<div>
				<main>{props.children}</main>
			</div>
			<Footer />
		</>
	)
};

export default Layout;
