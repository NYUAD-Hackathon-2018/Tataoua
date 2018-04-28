import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import FontAwesome from 'react-fontawesome'
import Page from '../../components/page'

const ProjectDetails = ({ hide }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }}>
    <div style={{
      width: '50%',
      height: '70%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff'
    }}>
      <div style={{
        width: '100%',
        height: '400px',
        background: "url('/static/imgs/main_background.jpg')",
        backgroundSize: 'cover',
        position: 'relative'
      }}>
        <div onClick={hide} style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: '#fff',
          width: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          cursor: 'pointer'
        }}>X</div>
      </div>
      <div style={{ flex: 2, padding: '10px' }}>
        <div>Books2Benefit Charity Book Sale 2017</div>
        <div>Apr 28 - May 4, 2018</div>
        <div>NGO: Care2Share</div>
        <p>
          Dear Friends and Patrons,

          This is to let you know that the Books2Benefit Charity Booksale has been postponed from September 7 and 8, 2017 to November 24 and 25, 2017 to encourage wider participation from across the country. Kindly note we will be continuing to receive book donations and will be activating the Volunteer registrations towards the beginning of October, 2017. Meanwhile, do register you interests on www.books2benefit.me.
          Thank you so much for all your support!

          Regards,
          The Books2Benefit UAE Team
      </p>
      </div>
    </div>
  </div>
)


const ProjectPreview = ({ show }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    height: '200px',
    backgroundColor: '#fff',
    boxShadow: '#00000052 0px 0px 3px 0px',
  }}>
    <div style={{
      flex: 1,
      background: "url('/static/imgs/main_background.jpg')", backgroundSize: 'cover',
    }} />
    <div style={{ flex: 2, padding: '10px' }}>
      <div>Books2Benefit Charity Book Sale 2017</div>
      <div>Apr 28 - May 4, 2018</div>
      <div>NGO: Care2Share</div>
      <p style={{
        wordBreak: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical'
      }}>
        Dear Friends and Patrons,

        This is to let you know that the Books2Benefit Charity Booksale has been postponed from September 7 and 8, 2017 to November 24 and 25, 2017 to encourage wider participation from across the country. Kindly note we will be continuing to receive book donations and will be activating the Volunteer registrations towards the beginning of October, 2017. Meanwhile, do register you interests on www.books2benefit.me.
        Thank you so much for all your support!

        Regards,
        The Books2Benefit UAE Team
      </p>
      <button onClick={show} style={{
        backgroundColor: 'transparent',
        outline: 'none',
        color: '#0099cc',
        border: 'none',
        cursor: 'pointer'
      }}>
        Show Details
      </button>
    </div>
  </div>
)

export default class extends Page {
  constructor(props) {
    super(props)

    this.state = { showDetails: false }
  }

  showDetails = () => {
    console.log(this.state)
    this.setState({ showDetails: true })
  }

  closeDetails = () => {
    this.setState({ showDetails: false })
  }

  render() {
    return (
      <div style={{
        backgroundColor: "#feecd4d6",
        paddingTop: '30px',
        height: 'calc(100vh - 45px)',
        fontFamily: "'Oxygen', 'sans-serif' !important"
      }}>
        <link href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700" rel="stylesheet" />
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
            Volunteering opportunities
          </span>
        </div>

        <div id="projectsContainer" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridColumnGap: '20px',
          gridRowGap: '20px',
          marginTop: '30px',
          padding: '20px'
        }}>
          {/* project container */}
          <ProjectPreview show={this.showDetails.bind(this)} />
          <ProjectPreview show={this.showDetails.bind(this)} />
          <ProjectPreview show={this.showDetails.bind(this)} />
          <ProjectPreview show={this.showDetails.bind(this)} />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={{
            backgroundColor: 'transparent', outline: 'none',
            color: '#0099cc', border: 'none', fontSize: '20px'
          }}>
            Show more
          </button>
        </div>
        {
          this.state.showDetails &&
          <ProjectDetails hide={() => this.setState({ showDetails: false })} />
        }
      </div>
    )
  }
}