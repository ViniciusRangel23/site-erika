import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { imagePath } from "./images";
import { TreatmentDetails } from "./interactions";
import { sections, type Treatment } from "./treatments";

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="treatment-card">
      <div className="card-image">
        <Image src={imagePath(treatment.image)} alt="" fill sizes="(max-width: 639px) 48vw, (max-width: 1023px) 32vw, 280px" />
      </div>
      <div className="card-content flex flex-1 flex-col items-start">
        <h3>{treatment.name}</h3>
        <p>{treatment.description}</p>
        <TreatmentDetails treatment={treatment} />
      </div>
    </article>
  );
}

export default function Home() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const bookingLabel = <>Agendar consulta <ArrowRight size={19} aria-hidden="true" /></>;

  return (
    <main id="conteudo">
      <section id="sobre" className="hero" aria-labelledby="hero-title">
        <Image src={imagePath("hero")} alt="" className="hero-image" fill preload sizes="100vw" />
        <div className="hero-overlay" />
        <div className="shell hero-inner relative">
          <p className="eyebrow eyebrow-line">Tratamentos</p>
          <h1 id="hero-title">Soluções personalizadas<br className="hidden sm:block" /> para a saúde da sua pele.</h1>
          <span className="hero-rule" aria-hidden="true" />
          <p className="hero-description">Combinando ciência e tecnologia, oferecemos tratamentos individualizados para cuidar da sua pele, dos cabelos e das unhas, em todas as fases da vida.</p>
          <a href="#tratamentos" className="hero-link">Explore os tratamentos <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <div id="tratamentos">
        {sections.map(({ id, label, title, description, treatments, backdrop }) => (
          <section id={id} key={id} aria-labelledby={`${id}-titulo`}
            className={backdrop ? "treatment-band feature-band" : "treatment-band standard-band"}>
            {backdrop && (
              <div className="feature-image" aria-hidden="true">
                <Image src={imagePath(backdrop)} alt="" fill sizes="(max-width: 767px) 100vw, 45vw" />
              </div>
            )}
            <div className="shell band-inner">
              <div className="band-intro">
                <p className="eyebrow eyebrow-line">{label}</p>
                <h2 id={`${id}-titulo`}>{title}</h2>
                <p className="band-description">{description}</p>
                {!backdrop && (
                  <a className="button button-dark" href={`#${id}-opcoes`}>
                    Conheça os tratamentos <ArrowRight size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
              <div id={`${id}-opcoes`} className={`card-grid cards-${treatments.length}`}>
                {treatments.map((treatment) => <TreatmentCard key={treatment.image} treatment={treatment} />)}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section id="contato" className="appointment" aria-labelledby="appointment-title">
        <div className="shell appointment-inner">
          <div>
            <h2 id="appointment-title">Cuide da sua pele com quem entende.</h2>
            <p>Agende sua consulta e descubra o cuidado indicado para você.</p>
            {bookingUrl ? (
              <a className="button button-light" href={bookingUrl}>
                {bookingLabel}
              </a>
            ) : (
              <button type="button" className="button button-light" disabled>{bookingLabel}</button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
