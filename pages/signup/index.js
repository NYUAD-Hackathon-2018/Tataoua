import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import FontAwesome from 'react-fontawesome'
import Page from '../../components/page'
import Input from '../../components/materialInput'
import 'whatwg-fetch';

const rowStyle = {
  container: {
    position: 'relative',
    height: '50px',
    width: '200px',
    borderRadius: '2px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '#0000006b 0px 0px 2px 1px',
    marginRight: '10px',
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
    fontSize: '25px',
    color: '#fff'
  }
}

const LoginMethod = ({ name, href = '', toggle }) => (
  <div onClick={toggle(name)} id={name} style={rowStyle.container}>
    <img style={rowStyle.star} src="/static/icons/star.svg" />
    <span style={rowStyle.content}>{name}</span>
  </div>
)


export default class extends Page {
  state = { selectedType: '', interests: [] }

  singup = () => {
  }

  toggleSelection = selectedType => () => {
    const previousSelection = this.state.selectedType
    if (previousSelection) {
      const previous = document.getElementById(previousSelection)
      previous.style.boxShadow = '#0000006b 0px 0px 2px 1px'
      previous.style.backgroundColor = 'rgba(0,0,0,0.7)'
    }
    const element = document.getElementById(selectedType)
    element.style.boxShadow = 'none'
    element.style.backgroundColor = 'rgba(0,0,0,0.9)'
    this.setState({ selectedType })
  }

  toggleInterst = interest => () => {
    const { interests } = this.state
    const index = interests.indexOf(interest)
    if (index < 0) {
      interests.push(interest)
    } else {
      interests.splice(index, 1)
    }

    this.setState({ interests })
  }

  renderInterestsList = list => (
    <div />
  )

  componentDidMount() {
    fetch('/ingest/twitter/timeline', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(json => this.setState(json))
      .catch(err => this.setState({ tweets: [ "test" ], categories: [ "children&youth", "arts&culture", "education&literacy" ] }));
  }

    render() {
    const interests = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
        }}>
          <span style={{ color: 'rgb(255, 166, 0)', fontSize: '40px', margin: '10px 0' }}>Sign Up As</span>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* login methods */}
            <LoginMethod toggle={this.toggleSelection} name={'NGO'} href='signup/ngo' />
            <LoginMethod toggle={this.toggleSelection} name={'Company'} />
            <LoginMethod toggle={this.toggleSelection} name={'Individual'} />
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px'
        }}>
          <div>
            <Input disabled placeholder={'Username'} icon={'/static/icons/user.svg'} />
            <Input disabled placeholder={'Phone number'} icon={'/static/icons/phone.svg'} />
            <Input disabled placeholder={'NGO name'} icon={'/static/icons/twitter.svg'} />

            {/* intrests */}
            <div style={{
              margin: '10px 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)'
            }}>
              {
                interests.map((interest, index) => (
                  <div key={interest} onClick={this.toggleInterst(interest)}>
                    <span style={{ margin: '5px' }}>
                      <input
                        type='checkbox'
                        checked={this.state.interests.includes(interest)} />
                      <span>{interest}</span>
                    </span>
                  </div>
                ))
              }
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={this.singup} style={{
                padding: '10px 15px',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                color: '#fff',
                width: '100%',
                fontSize: '16px',
                backgroundColor: 'rgb(255, 166, 0)'
              }}>
                Submit
              </button>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
