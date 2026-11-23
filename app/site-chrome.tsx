import Link from "next/link";
import { Clock3, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { MobileNavigation } from "./interactions";

const links = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Dermatologia Clínica", href: "/#dermatologia-clinica" },
  { label: "Dermatologia Estética", href: "/#dermatologia-estetica" },
  { label: "Cirurgia Dermatológica", href: "/#cirurgia-dermatologica" },
  { label: "Tratamentos", href: "/#tratamentos" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Contato", href: "/#contato" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Erika Lucena Dermatologia, início">
      <span aria-hidden="true" className="brand-monogram"><span>E</span><span>L</span></span>
      <span className="brand-name">Erika Lucena <small>Dermatologia</small></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <header id="inicio" className="site-header">
        <div className="shell flex items-center justify-between gap-5">
          <Brand />
          <nav aria-label="Navegação principal" className="desktop-nav hidden items-center min-[1150px]:flex">
            {links.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link className="button button-dark header-cta" href="/#contato">Agendar consulta</Link>
            <MobileNavigation links={links} />
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  const { CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_HOURS, CLINIC_REGISTRATION, CLINIC_INSTAGRAM_URL, CLINIC_WHATSAPP_URL } = process.env;
  const phoneNumber = CLINIC_PHONE?.replace(/[^+\d]/g, "");
  const address = CLINIC_ADDRESS || "Rua Exemplo, 123 - Bairro, Cidade/UF";
  const phone = CLINIC_PHONE || "(11) 99999-9999";
  const hours = CLINIC_HOURS || "Seg a Sex, das 8h às 19h";
  const registration = CLINIC_REGISTRATION || "CRM 12345 | RQE 67890";
  const socials = [
    { label: "Instagram", url: CLINIC_INSTAGRAM_URL, icon: <Instagram size={24} aria-hidden="true" /> },
    {
      label: "WhatsApp",
      url: CLINIC_WHATSAPP_URL,
      icon: (
        <span className="whatsapp-icon" aria-hidden="true">
          <MessageCircle size={25} />
          <Phone size={11} />
        </span>
      ),
    },
  ];

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Brand />
        <div className="footer-content">
          <div className="footer-top">
            <nav className="footer-nav flex flex-wrap" aria-label="Navegação do rodapé">
              {links.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
            <div className="footer-socials">
              {socials.map(({ label, url, icon }) => url ? (
                <a key={label} href={url} aria-label={label}>{icon}</a>
              ) : (
                <span key={label} role="img" aria-label={label} title={label}>{icon}</span>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <address className="footer-contact">
              <span><MapPin size={20} aria-hidden="true" /> {address}</span>
              {phoneNumber ? (
                <a href={`tel:${phoneNumber}`}><Phone size={20} aria-hidden="true" /> {phone}</a>
              ) : (
                <span><Phone size={20} aria-hidden="true" /> {phone}</span>
              )}
              <span><Clock3 size={20} aria-hidden="true" /> {hours}</span>
            </address>
            <span className="footer-registration">{registration}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
