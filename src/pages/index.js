import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
            }
        }
    }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HUGSI - Blog</h1>
  {/*{data.posts.nodes.map(post => (
      <div key={`post-${post.slug}`}>
        <h2>
          <Link to={`/${post.slug}`}>
            {post.title} (with {post.author.name})
          </Link>
        </h2>
      </div>
    ))}*/}
  </Layout>
)

export default IndexPage
