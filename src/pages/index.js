import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import './index.css'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const darkTheme = {
  color: 'blue',
  headerColor: 'LightBlue',
  backgroundColor: 'DarkBlue'
}

const lightTheme = {
  color: 'red',
  headerColor: 'Tomato',
  backgroundColor: 'DarkRed'
}

const StyledP = styled.p`
  color: ${props => props.theme.color};
`

const StyledH1 = styled.h1`
  color: ${props => props.theme.headerColor};
`

const StyledDiv = styled.div`
  background: ${props => props.theme.backgroundColor};
  padding: 40px 120px;
  margin: 0 auto;
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
      <ThemeProvider theme={this.state.dark ? darkTheme : lightTheme}>
        <Layout>
          <StyledDiv>
            <div className="tg-list-item">
              <input onClick={this.onDarkToggle} className="tgl tgl-skewed" id="cb3" type="checkbox"/>
              <label className="tgl-btn" data-tg-off="🌚" data-tg-on="🌞" htmlFor="cb3"></label>
            </div>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <StyledH1>Hi people</StyledH1>
            <StyledP>Welcome to your new Gatsby site.</StyledP>
            <StyledP>Now go build something great.</StyledP>
            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledP>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
          </StyledDiv>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default IndexPage
