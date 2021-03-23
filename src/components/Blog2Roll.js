import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TestBlog2 extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>

              {post.fields.slug.indexOf("blog2") > 0 ? (
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
                    <h3>{post.frontmatter.videoUrl}</h3>
                    {post.frontmatter.videoUrl ? (
                      <iframe width="420" height="315"
                        src={post.frontmatter.videoUrl}>
                      </iframe>
                    ) : null}
                    <div dangerouslySetInnerHTML={{ __html: post.html }}>
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

TestBlog2.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TestBlog2Query {
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
                videoUrl
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
    render={(data, count) => <TestBlog2 data={data} count={count} />}
  />
)