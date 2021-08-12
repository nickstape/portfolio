import casebody from './case-body.jpg';
import './css/App.css';
import "./css/Responsive.css"

function Work() {
  return (
          <div className="row CaseStudies-body">   
                         <div className='col-md-6 content-image'>
                           <img type="image/jp" src={casebody} alt='case-study-placeholder' className='case-img'/>
                        </div>
                        <div className="col-md-6 content-details">
                            <p className='tagline overtext'>
                                <span>&nbsp;Egwu Records is a platform for discovering music of yesterday's today. Egwu allows people exchange, buy and trade records.</span>
                            </p>
                            <div className="multi-button">
                              <a href='https://www.notion.so/Case-Study-a603be3b9e244798854814a37880807a'>
                                  <button>View more</button>
                            </a>
                             </div>
                        </div>    
                </div>
  );
}

export default Work;