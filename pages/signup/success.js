import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import Page from '../../components/page'


export default class extends Page {
  render() {
    return (
      <div style={{
        background: "url('/static/imgs/success_background.jpg') no-repeat center center",
        backgroundSize: 'cover',
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
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '50px'
        }}>
          <div style={{
            backgroundColor: 'rgb(255, 166, 0)',
            height: '60px', width: 'calc(60% + 50px)',
            borderRadius: '5px', marginLeft: '-40px',
            boxShadow: '#0000006b 1px 1px 1px 1px',
            zIndex: 2
          }}>
            <img src="/static/imgs/like.png" style={{ width: '50px', margin: '5px 0 0 5px' }} />
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            width: '60%',
            height: '200px',
            textAlign: 'center',
            marginTop: '-10px',
            paddingTop: '20px'
          }}>
            <span style={{
              fontSize: '70px',
              color: 'rgb(255, 166, 0)'
            }}>
              Welcome to Our <br />
              Community !
            </span>
            <br />
            <Link href='/projects'>
              <span style={{
                fontSize: '20px',
                color: '#0099cc',
                cursor: 'pointer'
              }}>
                Go to projects page
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}