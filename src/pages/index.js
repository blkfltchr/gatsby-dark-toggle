import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const theme = {
  color: 'blue',
}

const newTheme = {
  color: 'red',
}

const Blue = styled.p`
  color: ${props => props.theme.color};
`

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        dark: false,
    }
}

  onDarkToggle = () => {
    this.setState({dark: !this.state.dark})
  }
  
  render() {
    console.log(this.state)
    return (
      <ThemeProvider theme={this.state.dark ? theme : newTheme}>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <button onClick={this.onDarkToggle}>Toggle me</button>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Blue>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Blue>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Go to page 2</Link>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default IndexPage
