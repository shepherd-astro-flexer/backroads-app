import { serviceData } from "../data"
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="our" second="services" />

      <div className="section-center services-center">
        {serviceData.map(({ fab, title, text, id }) => {
          return (
            <article key={id} className="service">
              <span className="service-icon"><i className={fab}></i></span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  {text}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services