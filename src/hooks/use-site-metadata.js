import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            author
            description
            social {
                linkedin
                github
                instagram
                twitter
                email
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
