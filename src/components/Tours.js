import Title from "./Title";
import { toursData } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" second="tours" />

      <div className="section-center featured-center">
        {toursData.map(({ 
          id,
          src, 
          date, 
          info, 
          text, 
          days, 
          price,
          destination
          }) => {
            return (
              <article key={id} className="tour-card">
                <div className="tour-img-container">
                  <img src={src} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{info}</h4>
                  </div>
                  <p>
                    {text}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span><i className="fas fa-map"></i></span> {destination}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            )
        })}
      </div>
    </section>
  )
}
export default Tours