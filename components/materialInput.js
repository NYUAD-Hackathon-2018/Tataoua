import Link from 'next/link'
import React from 'react'
import Router from 'next/router'

const Input = ({ value = '', placeholder, disabled, icon, onChange = () => { }, required }) => (
  <div style={{ margin: '5px' }}>
    {icon && <img src={icon} alt="" className="inputIcon" />}
    <input
      value={value}
      type="text"
      className="formInput"
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      required={required} />

    <style jsx>{`
      .formInput{
        border: none;
        border-bottom: 1px solid #333333a6;
        outline: none;
        padding: 10px 5px;
        font-size: 18px;
        color: #333;
        background-color: transparent
      }

      .formInput:focus{
        border-bottom: 2px solid #0099cc
      }
      .inputIcon{
        width: 30px;
        margin-bottom: -15px;
        margin-right: 10px
      }
    `}</style>
  </div>
)

export default Input  