import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';


const ImageBackground = styled(BackgroundImage)`
    background-position: top 30% center;
    background-size:cover;
    height: 50vh;

        + * {
            margin-top: 0;
        }
`;

const TextBox = styled("div")`
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 calc((100vw - 550px)/2) 2rem;

`;


const Hero = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "robert-katzki.jpg"}){
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return(
        <ImageBackground Tag = "section" fluid = {image.sharp.fluid} fadeIn = "soft">
            <TextBox>
                <h1> Hello gatsby community </h1>
            </TextBox>
        </ImageBackground>
    )
};
export default Hero;