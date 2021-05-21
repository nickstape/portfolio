
import { useHistory } from "react-router-dom";
import './css/App.css';

   const Content = () =>{
    let history = useHistory();

    const handleClick = () => {
      history.push("/CaseStudies");
    }
  return (
          <div className="contents-body">   
                         <div data-content-for="xl">
                             <p>
                                <span>&nbsp;A Product Manager — </span><span>passionate  about <span data-v-3a5e27be >technology,</span> <a data-v-3a5e27be href='https://vsco.co/maryfisher/gallery' target="_blank" rel="noreferrer">photography,</a> <span data-v-3a5e27bg >art</span> and how they shape our human experience and growth, delivering value, finding problems and validating solutions. .</span>
                            </p>
                         </div>
                         <div className="multi-button">
                            <button onClick={handleClick}>Case Studies</button>
                        </div>
                </div>
  );
}

export default Content;