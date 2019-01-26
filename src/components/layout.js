import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer style={{backgroundColor: 'Lavender', padding: '10px 120px '}}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` by `}
            <a href="https://github.com/blkfltchr">Blake Fletcher</a>
            {`, `}
            <a href="https://github.com/timh1203">Tim Hoang</a>
            {`, and `}
            <a href="https://github.com/skidragon">Simon Davis</a>
            {`.`}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
