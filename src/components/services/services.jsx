import React from 'react';
import './services.css';
import {AiOutlineCheck} from 'react-icons/ai';

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
            <h3>Software Testing</h3>
          </div>

        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Understanding Requirements</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Planning</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Case Design</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Execution</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Defect Reporting and Tracking</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Regression Testing</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Exploratory Testing</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Communication with developers</p>
          </li>
          
        </ul>
        </article>
        
        {/* End of The Section  */}

        <article className='service'>
          <div className="service__head">
            <h3>Mobile App Testing</h3>
          </div>

          <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Understanding Requirements</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Planning and Strategy</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Device and Platform Testing</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Case Design & Execution</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Defect Reporting and Tracking</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Regression Testing</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>User Experience Testing:</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Communication with developers</p>
          </li>
          
        </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Automation Testing</h3>
          </div>

        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Planning and Strategy</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Script Development</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Framework Setup</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Execution</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Test Data Management</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Integration Testing</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Collaboration and Communication</p>
          </li>

        </ul>
        </article>

      </div>
    </section>
  )
}

export default Services