import React from 'react';
import './portfolio.css';
import IMG1 from "../../../src/assets/portfolio1.png";
import IMG2 from "../../../src/assets/portfolio2.png";
import IMG3 from "../../../src/assets/portfolio3.png";
import IMG4 from "../../../src/assets/portfolio4.jpg";
import IMG5 from "../../../src/assets/portfolio5.jpg";
import IMG6 from "../../../src/assets/portfolio6.png";


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img className="portfolioImg" width="410" height="335"   src={IMG1} alt="" />
          </div>
          <h3>Contribute as a Tester in Kidu Shopify Theme</h3>
          <div className="portfolio__item-image">
          {/* <a href="https://github.com/ahmad0711" className='btn'>Github</a>
          <a href="#" className='btn btn primary'>Live Demo</a> */}
          </div>
      </article>

      <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img className="portfolioImg" width="410" height="335"  src={IMG2} alt="" />
          </div>
          <h3>Contribute as a Tester in Shopify App</h3>
          <div className="portfolio__item-image">
          {/* <a href="https://github.com/ahmad0711" className='btn'>Github</a>
          <a href="#" className='btn btn primary'>Live Demo</a> */}
          </div>
      </article>

      <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img className="portfolioImg" width="410" height="335"  src={IMG3} alt="" />
          </div>
          <h3>Contribute as a Tester in Shopif App </h3>
          <div className="portfolio__item-image">
          {/* <a href="https://github.com/ahmad0711" className='btn'>Github</a>
          <a href="#" className='btn btn primary'>Live Demo</a> */}
          </div>
      </article>

      <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img className="portfolioImg" width="410" height="335"  src={IMG4} alt="" />
          </div>
          <h3>Contribute as a Tester in Mobile app</h3>
          <div className="portfolio__item-image">
          {/* <a href="https://github.com/ahmad0711" className='btn'>Github</a>
          <a href="#" className='btn btn primary'>Live Demo</a> */}
          </div>
      </article>

      <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img className="portfolioImg" width="410" height="335"  src={IMG5} alt="" />
          </div>
          <h3>Contribute as a Tester in Mobile App</h3>
          <div className="portfolio__item-image">
          {/* <a href="https://github.com/ahmad0711" className='btn'>Github</a>
          <a href="#" className='btn btn primary'>Live Demo</a> */}
          </div>
      </article>

      <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img className="portfolioImg" width="410" height="335"  src={IMG6} alt="" />
          </div>
          <h3>Contribute as a Tester</h3>
          <div className="portfolio__item-image">
          {/* <a href="https://github.com/ahmad0711" className='btn'>Github</a>
          <a href="#" className='btn btn primary'>Live Demo</a> */}
          </div>
      </article>

      </div>

    </section>
  )
}

export default Portfolio