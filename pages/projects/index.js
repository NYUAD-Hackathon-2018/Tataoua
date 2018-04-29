import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import FontAwesome from 'react-fontawesome'
import Page from '../../components/page'

class ProjectDetails extends React.Component {
  state = { applied: false }

  render() {
    const { hide, data } = this.props
    return (
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
            background: `url('${data.image}')`,
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
            <div>{data.title}</div>
            <div>{data.date}</div>
            <div>NGO: {data.ngo}</div>
            <p>{data.content}</p>

            <div style={{ width: '100%', textAlign: 'center' }}>
              <button
                onClick={() => { this.setState({ applied: true }) }}
                style={{
                  backgroundColor: '#0099cc',
                  borderRadius: '5px',
                  color: '#fff',
                  cursor: 'pointer',
                  border: 'none',
                  outiline: 'none',
                  padding: '10px',
                  fontSize: '17px'
                }}>
                {
                  this.state.applied ?
                    <span>
                      <img src="/static/imgs/checked.png" style={{ width: '20px', marginBottom: '-5px' }} />  Applied successfully
                    </span> : 'Apply for this project'
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const ProjectPreview = ({ show, data }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    height: '200px',
    backgroundColor: '#fff',
    boxShadow: '#00000052 0px 0px 3px 0px',
  }}>
    <div style={{
      flex: 1,
      background: `url('${data.image}')`,
      backgroundSize: 'cover',
    }} />
    <div style={{ flex: 2, padding: '10px' }}>
      <div>{data.title}</div>
      <div>{data.date}</div>
      <div>NGO: {data.ngo}</div>
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
        {data.content}
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
  state = { showDetails: false, selectedProject: 0 }

  static getInitialProps(props) {
    const { query: { type = 'NGO' } } = props;
    return { type };
  }

  data = [
    {
      title: 'Water Aid',
      date: 'All year',
      ngo: 'Water Aid initiative',
      image: '/static/imgs/water aid.jpg',
      content:
        `His Highness Sheikh Mohammed bin Rashid Al Maktoum, Vice-President and Prime Minister of the UAE and Ruler of Dubai has launched the UAE Water Aid initiative as a gift to the world this Holy Month of Ramadan. The aim is to provide drinking water to 5 million people around the world experiencing severe water shortages. You can donate by text message. Text 800733 for information.`
    }, {
      title: 'Books2Benefit Charity Book Sale 2017',
      date: 'Apr 28 - May 4, 2018',
      ngo: 'Care2Share',
      image: '/static/imgs/project.png',
      content:
        `Dear Friends and Patrons,

      This is to let you know that the Books2Benefit Charity Booksale has been postponed from September 7 and 8, 2017 to November 24 and 25, 2017 to encourage wider participation from across the country. Kindly note we will be continuing to receive book donations and will be activating the Volunteer registrations towards the beginning of October, 2017. Meanwhile, do register you interests on www.books2benefit.me.
      Thank you so much for all your support!

      Regards,
      The Books2Benefit UAE Team`
    }, {
      title: 'Ramadan Active Wear Drive',
      date: 'Ramadan',
      ngo: 'yApparel ',
      image: '/static/imgs/ramadan.jpg',
      content:
        `Want to give back this Ramadan? We do too.From July 1-July 31, join us in our clothing drive to the Dubai Foundation for Women & Children. Here’s how it works:
        1. DONATE
        Gather together as many articles of activewear that you’d be willing to donate!

        2. DISCOUNT
        For your amazing efforts, we’ll reward you with a discount voucher valid for your next purchase at yApparel – valid until the end of the year. We’ll take your regular clothes too if you’d like, but only fitness or sports apparel will count`
    }, {
      title: 'Filling the Blues',
      date: 'Mars 12 - Jun 17, 2018',
      ngo: 'Moti Roti',
      image: '/static/imgs/filling-the-blues.jpg',
      content:
        `Moti Roti has started a campaign where they provide food for labourers.  They are looking for volunteers to help distribute the food and for restaurants to provide the food.  Companies already involved include Moti Roti (of course). Taqado Mexican Kitchen. BookMunch Cafe. Camelicious. Shakeism. The Kebab Shop. Shamiana. Flames Grills & Curries. RoundMenu. iConsultHotels. Timepiece360. Synquatics.`
    }
  ]

  showDetails = index => {
    console.log(this.state)
    this.setState({ showDetails: true, selectedProject: index })
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
          justifyContent: 'space-between',
          backgroundColor: '#f2f2f2',
          boxShadow: '#00000052 0px 0px 3px 0px'
        }}>
          <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
            <img src="/static/imgs/logo.png" alt="atataoua_logo" style={{
              width: '110px',
              height: '150px'
            }} />

            <span style={{ color: 'rgb(255, 166, 0)', fontSize: '40px' }}>
              Volunteering opportunities
            </span>
          </div>

          {this.props.type === 'NGO' && <button
            onClick={() => { this.setState({ applied: true }) }}
            style={{
              backgroundColor: 'rgb(255, 166, 0)',
              borderRadius: '5px',
              color: '#fff',
              cursor: 'pointer',
              border: 'none',
              outiline: 'none',
              padding: '10px',
              fontSize: '17px'
            }}>
            <img src="/static/imgs/add.png" style={{ width: '20px', marginBottom: '-5px' }} />  Add new project
          </button>}
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
          {
            this.data.map((project, index) => (
              <ProjectPreview key={index} data={project} show={() => this.showDetails(index)} />
            ))
          }
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
          <ProjectDetails data={this.data[this.state.selectedProject]} hide={() => this.setState({ showDetails: false })} />
        }
      </div>
    )
  }
}