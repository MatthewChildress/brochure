import { NextPage } from "next";
import { Children } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 0 1.25rem;
	margin: auto;
` 

const Container: NextPage = (props: any) => {
	return <Wrapper>{props.children}</Wrapper>;
};

export default Container;