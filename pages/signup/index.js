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
  state = { selectedType: '', categories: ['environment', 'animals', 'seniors', 'health', 'women'], selectedCatergories: [] }

  pictures = {
    'environment': 'environment.jpg',
    'animals': 'pets.jpg',
    'seniors': 'seniors.jpg',
    'health': 'health.png',
    'women': 'women.jpg',
    'peoplewithdisabilities': 'physical_disability_.jpg',
    'children&youth': 'youth.jpg',
    'arts&culture': 'art.jpg',
    'education&literacy': 'education.jpg'
  }

  singup = () => {
    Router.push({
      pathname: '/projects',
      query: { type: this.state.selectedType }
    })
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

  toggleCategory = category => () => {
    const { selectedCatergories } = this.state
    const index = selectedCatergories.indexOf(category)
    if (index < 0) {
      selectedCatergories.push(category)
    } else {
      selectedCatergories.splice(index, 1)
    }

    this.setState({ selectedCatergories })
  }

  componentDidMount() {
    fetch('/ingest/twitter/timeline', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          const categories = ["children&youth", "arts&culture", "education&literacy"]
          this.setState({ categories: categories.concat(this.state.categories), selectedCatergories: [].concat(categories) })
        } else {
          const { categories } = res
          this.setState({ categories: categories.concat(this.state.categories), selectedCatergories: [].concat(categories) })
        }
      });
  }

  render() {
    return (
      <div style={{
        background: "url('/static/imgs/main_background.jpg') no-repeat center center",
        paddingTop: '30px',
        height: 'calc(100vh - 45px)'
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
          <img src="/static/imgs/logo.png" alt="atataoua_logo" style={{
            width: '110px',
            height: '150px'
          }} />

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Input value='Mathew Smith' placeholder={'Username'} icon={'/static/icons/user.svg'} />
              {/* <Input value='' placeholder={'Phone number'} icon={'/static/icons/phone.svg'} /> */}
              {
                this.state.selectedType === "Individual" &&
                <div style={{}}>
                  <img src="/static/icons/case.svg" style={{
                    width: '30px',
                    marginBottom: '-10px',
                    marginRight: '10px'
                  }} alt="" />

                  <select name="" id="" style={{
                    padding: '5px',
                    margin: '10px 0'
                  }}>
                    <option value="">Select your company</option>
                    <option value="">Abu Dhabi National Energy Company</option>
                    <option value="">Al Dahra Agricultural Company</option>
                    <option value="">Al Ghurair Group</option>
                    <option value="">Dar Al Khaleej Printing and Publishing</option>
                    <option value="">The Emirates Group</option>
                  </select>
                </div>
              }
            </div>

            {/* intrests */}
            <div style={{
              margin: '10px 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridColumnGap: '10px',
            }}>
              {
                this.state.categories.map((category, index) => (
                  <div key={category}>
                    <label className="checkbox-container">
                      <div style={{
                        background: `url('/static/imgs/categories/${this.pictures[category]}') center center`,
                        backgroundSize: 'cover',
                        height: '100px'
                      }}>
                        <div style={{
                          height: "calc(100% - 10px)",
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          color: '#fff',
                          padding: '5px'
                        }}>
                          {category.replace('&', ' and ').replace('with', ' with ')}
                        </div>
                      </div>
                      <input
                        type='checkbox'
                        onChange={this.toggleCategory(category)}
                        checked={this.state.selectedCatergories.includes(category)} />
                      <span className="checkmark">&#x2713;</span>
                    </label>
                    <style jsx>{`
                      /* The container */
                      .checkbox-container {
                          display: block;
                          position: relative;
                          padding-left: 35px;
                          margin-bottom: 12px;
                          cursor: pointer;
                          font-size: 22px;
                          -webkit-user-select: none;
                          -moz-user-select: none;
                          -ms-user-select: none;
                          user-select: none;
                          text-transform: capitalize
                      }

                      /* Hide the browser's default checkbox */
                      .checkbox-container input {
                          position: absolute;
                          opacity: 0;
                          cursor: pointer;
                      }

                      /* Create a custom checkbox */
                      .checkmark {
                          position: absolute;
                          top: 0;
                          left: 0;
                          height: 25px;
                          width: 25px;
                          background-color: #eee;
                          text-align: center;
                          line-height: 28px;
                          color: transparent;
                      }

                      /* On mouse-over, add a grey background color */
                      .checkbox-container:hover input ~ .checkmark {
                          background-color: #ccc;
                      }

                      /* When the checkbox is checked, add a blue background */
                      .checkbox-container input:checked ~ .checkmark {
                          background-color: #2196F3;
                      }

                      /* Create the checkmark/indicator (hidden when not checked) */
                      .checkbox-container:after {
                          content: "";
                          position: absolute;
                          display: none;
                      }

                      /* Show the checkmark when checked */
                      .checkbox-container input:checked ~ .checkmark:after {
                          display: block;
                          color: white;
                      }

                      /* Show the checkmark when checked */
                      .checkbox-container input:checked ~ .checkmark {
                          color: white;
                      }

                      .checkbox-container .checkmark:after {
                          left: 9px;
                          top: 5px;
                          width: 5px;
                          height: 10px;
                          border: solid white;
                          border-width: 0 3px 3px 0;
                          -webkit-transform: rotate(45deg);
                          -ms-transform: rotate(45deg);
                          transform: rotate(45deg);
                          color: white;
                      }
                    `}</style>
                  </div>
                ))
              }
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={this.singup} style={{
                padding: '10px 15px',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                color: '#fff',
                width: '50%',
                fontSize: '16px',
                backgroundColor: 'rgb(255, 166, 0)',
                boxShadow: '#0000009e 0px 1px 1px 1px'
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
