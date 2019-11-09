import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
    query($slug: String!) {
        post: contentfulPost(slug: {eq: $slug}) {
            title
            content {
                json
            }
            author {
                name
            }
            seo {
                title
                description {
                    description
                }
            }
        }
    }
`

const PostTemplate = () => (
  <div>
    <h1>post.title</h1>
    <p>
      `Guest: lesson.authorizationError.name`
    </p>

    <div>
{/*      {documentToReactComponents(post.content.json, {
        renderNode: {
          [BLOCKS.HEADING_2]: (_node, children) => (
            <h2 style={{ color: "red" }}>{children}</h2>
          ),
          [BLOCKS.EMBEDDED_ASSET]: node => (
            <img
              src={`${node.data.target.fields.file["en-US"].url}?w=300&q=90`}
              alt={node.data.target.fields.title["en-US"]}
            />
          ),
        },
      })}*/}
    </div>

  </div>
)

export default PostTemplate
