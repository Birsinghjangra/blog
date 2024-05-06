import React from 'react'
import Header from '../components/Header/header'
import Content from './content/content'
import '../components/css/Quora.css'


function Quora() {
  return (
    <div>
      <Header />
      <div>
        <div className="container" >
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quora