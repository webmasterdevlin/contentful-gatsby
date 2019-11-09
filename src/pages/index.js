import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    posts: allContentfulPost {
      nodes {
        title
        slug
        author {
          name
        }
        previewText
        content {
          json
        }
        featureImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Latest</h1>
    <div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))",
          gridGap: "2.5rem",
          listStyle: "none",
        }}
      >
        {data.posts.nodes.map(post => (
          <li key={post.slug}>
            <h2 style={{ fontSize: "24px", textDecoration: "none" }}>
              <Link style={{ textDecoration: "none" }} to={post.slug}>
                {post.title} <small>by: {post.author.name}</small>
              </Link>
            </h2>
            <Image
              style={{ width: "25rem" }}
              fluid={post.featureImage.fluid}
              alt={post.title}
            />
            <p>{post.previewText}</p>
            <Link to={post.slug}>See project details</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage
