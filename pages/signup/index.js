import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import FontAwesome from 'react-fontawesome'
import Page from '../../components/page'
import Layout from '../../components/layout'

const rowStyle = {
  container: {
    position: 'relative',
    height: '80px',
    width: '300px',
    borderRadius: '2px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '#0000006b 0px 0px 2px 1px',
    marginBottom: '10px',
    cursor: 'pointer'
  },
  star: {
    position: 'absolute',
    left: 10,
    width: '20px',
    height: '20px'
  },
  content: {
    width: '100%',
    textAlign: 'center',
    fontSize: '30px',
    color: '#fff'
  }
}

const LoginMethod = ({ name }) => (
  <div style={rowStyle.container}>
    <img style={rowStyle.star} src="/static/icons/star.svg" />
    <span style={rowStyle.content}>{name}</span>
  </div>
)


export default class extends Page {
  render() {
    return (
      <div style={{
        background: "url('/static/imgs/main_background.jpg') no-repeat center center",
        paddingTop: '50px',
        height: 'calc(100vh - 65px)'
      }}>

        <div style={{
          padding: '0 20px 0 5px',
          display: "flex",
          height: '100px',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'start',
          backgroundColor: '#f2f2f2',
          boxShadow: '#00000052 0px 0px 3px 0px'
        }}>
          <img src="/static/imgs/logo.png" alt="atataoua_logo" style={{ width: '200px', height: 'auto' }} />

          <span style={{ color: 'rgb(255, 166, 0)', fontSize: '40px' }}>
            Welcome to the first Volunteering website for companies
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '50px'
        }}>
          <span style={{ color: 'rgb(255, 166, 0)', fontSize: '40px', margin: '10px 0' }}>Sign Up As</span>
          <div>
            {/* login methods */}
            <LoginMethod name={'NGO'} />
            <LoginMethod name={'Company'} />
            <LoginMethod name={'Individual'} />
          </div>
        </div>
      </div >
    )
  }
}