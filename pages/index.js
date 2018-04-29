import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import FontAwesome from 'react-fontawesome'
import Page from '../components/page'
import Layout from '../components/layout'
import SignIn from '../components/signin';
import Cookies from "universal-cookie";
import { NextAuth } from "next-auth/client";
import {
  Container, Row, Col, Nav, NavItem, Button, Form, NavLink, Collapse,
  Navbar, NavbarToggler, NavbarBrand, Modal, ModalHeader, ModalBody,
  ModalFooter, ListGroup, ListGroupItem
} from 'reactstrap'

const authBtnStyle = {
  background: "rgba(240, 163, 10, 0.82)",
  textAlign: "left",
  color: "#ffffff",
  fontSize: "18px",
  border: " 0px solid rgba(0, 0, 0, 1)",
  margin: "0 10px",
  padding: "5px",
  cursor: 'pointer'
}

const rankRowStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  marginLeft: '-20px'
}

const rankImgStyle = {
  width: '50px',
  height: '70px',
  marginRight: '20px'
}

export default class extends Page {
  async handleSignoutSubmit(event) {
    event.preventDefault()

    // Save current URL so user is redirected back here after signing out
    const cookies = new Cookies()
    cookies.set('redirect_url', window.location.pathname, { path: '/' })

    await NextAuth.signout()
    Router.push('/')
  }

  render() {
    let logoutComponent = (
      <Form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignoutSubmit}>
        <input name="_csrf" type="hidden" value={this.props.session.csrfToken} />
        <Button type="submit" block className="pl-4 rounded-0 text-left dropdown-item"><span className="icon ion-md-log-out mr-1"></span>Sign out</Button>
      </Form>
    );
    let loginComponent = (
      <div>
        <Link href='http://localhost:3000/auth/oauth/twitter'>
          <button style={authBtnStyle}>
            Sign Up <img src="/static/icons/user-plus.svg" alt="" width="20" style={{ marginBottom: '-5px' }} />
          </button>
        </Link>

        <Link href='http://localhost:3000/auth/oauth/twitter'>
          <button style={authBtnStyle}>
            Login <img src="/static/icons/signup.svg" alt="" width="20" style={{ marginBottom: '-5px' }} />
          </button>
        </Link>
      </div>
    );

    let authComponent = (this.props.session && this.props.session.user) ? logoutComponent : loginComponent;
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
          justifyContent: 'space-between',
          backgroundColor: '#f2f2f2',
          boxShadow: '#00000052 0px 0px 3px 0px'
        }}>
          <img src="/static/imgs/logo.png" alt="atataoua_logo" style={{
            width: '110px',
            height: '150px'
          }} />

          <span style={{ color: 'rgb(255, 166, 0)', fontSize: '35px' }}>
            Welcome to the First Corporate Volunteering League
          </span>

          <div>
            {authComponent}
          </div>
        </div>

        <h2 style={{ textAlign: 'center', color: '#5c3300', marginTop: '55px' }}>
          Our Leaderboard for this year
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', left: '150px', zIndex: 1 }}>
            <img src="/static/imgs/baloon.gif" alt="balloon" style={{
              width: '430px',
              marginTop: '-140px'
            }} />
          </div>
          <img src="/static/imgs/board.png" width='600' alt="" />
        </div>
      </div>
    )
  }
}
