import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TestBlog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>

              {post.fields.slug.indexOf("blog1") > 0 ? (
                <article>
                  <div className="blogpost_text">
                    <Link to={post.fields.slug}
                    >
                      <h3>{post.frontmatter.title}</h3>
                    </Link>
                    <span>
                      {post.frontmatter.date}
                    </span>
                    <p>
                      {post.frontmatter.description}
                    </p>
                    {/* {post.frontmatter.featuredimage ? (
                      <div className="post-image">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null} */}

                    <div dangerouslySetInnerHTML={{ __html: post.html }} className="innered-html">
                    </div>
                    {/* <Link className="button" to={post.fields.slug}>
                    Keep Reading
                   </Link> */}

                  </div>
                </article>

              ) : null}



            </div>
          ))}
      </div>
    )
  }
}

TestBlog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TestBlogQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                description
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `}
    render={(data, count) => <TestBlog data={data} count={count} />}
  />
)