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
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-line">Dermatologia clínica, estética e cirúrgica</p>
            <h1 id="hero-title">Ciência, cuidado e naturalidade em cada detalhe.</h1>
            <p className="hero-description">Uma abordagem individualizada para a saúde da pele, dos cabelos e das unhas, respeitando as particularidades de cada pessoa.</p>
            <a href="#contato" className="button button-dark">Agendar consulta <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-portrait">
            <Image src={imagePath("dra-erika-consultorio")} alt="Dra. Erika Lucena no consultório" fill preload sizes="(max-width: 767px) 100vw, 55vw" />
          </div>
        </div>
      </section>

      <section id="sobre" className="about-band" aria-labelledby="about-title">
        <div className="shell about-inner">
          <Image src={imagePath("dra-erika-retrato")} alt="Retrato da Dra. Erika Lucena" width={770} height={1100} sizes="(max-width: 767px) 220px, 300px" className="about-portrait" />
          <div className="band-intro">
            <p className="eyebrow eyebrow-line">Sobre a Dra. Erika Lucena</p>
            <h2 id="about-title">Uma trajetória dedicada ao cuidado.</h2>
            <p className="band-description">A Dra. Erika Lucena atua nos cuidados com a pele, os cabelos e as unhas. Na consulta, a escuta e a avaliação dermatológica orientam um plano de cuidado que considera as necessidades de cada pessoa.</p>
            <a href="#tratamentos" className="hero-link">Explore os tratamentos <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
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
