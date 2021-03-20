import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = props => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
        render={data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename);
            });
            if (!image) {
                return <div>Image introuvable</div>;
            }

            //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
            return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} className="image" />;
        }}
    />
);

export default Image;