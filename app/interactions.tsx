"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import type { Treatment } from "./treatments";

export function MobileNavigation({ links }: { links: { label: string; href: string }[] }) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details className="mobile-nav min-[1150px]:hidden" ref={menu} onKeyDown={(event) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    }}>
      <summary aria-label="Menu de navegação">
        <Menu size={23} className="menu-open" aria-hidden="true" />
        <X size={23} className="menu-close" aria-hidden="true" />
      </summary>
      <nav aria-label="Navegação no celular">
        {links.map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => { if (menu.current) menu.current.open = false; }}>
            {label}
          </Link>
        ))}
      </nav>
    </details>
  );
}

export function TreatmentDetails({ treatment }: { treatment: Treatment }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className="treatment-link" aria-haspopup="dialog"
        aria-label={`Saiba mais sobre ${treatment.name}`}
        onClick={() => dialog.current?.showModal()}>
        Saiba mais <ArrowRight size={15} aria-hidden="true" />
      </button>
      <dialog ref={dialog} className="treatment-dialog" aria-label={treatment.name}>
        <form method="dialog">
          <button className="dialog-close" aria-label="Fechar"><X size={23} aria-hidden="true" /></button>
        </form>
        <p className="eyebrow">Tratamentos</p>
        <h2>{treatment.name}</h2>
        <p>{treatment.description} Em consulta, a avaliação dermatológica orienta a indicação e os cuidados para o seu caso.</p>
        <a className="button button-dark" href="#contato" onClick={() => dialog.current?.close()}>
          Agendar consulta <ArrowRight size={17} aria-hidden="true" />
        </a>
      </dialog>
    </>
  );
}
