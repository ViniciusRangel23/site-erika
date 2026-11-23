import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "./articles";
import { imagePath } from "../images";

export const metadata: Metadata = {
  title: "Conteúdos | Erika Lucena Dermatologia",
  description: "Artigos sobre cuidados com a pele, proteção solar, saúde capilar e queda de cabelo.",
};

export default function ContentsPage() {
  return (
    <main id="conteudo">
      <header className="editorial-hero">
        <div className="shell">
          <p className="eyebrow eyebrow-line">Erika Lucena Dermatologia</p>
          <h1>Conteúdos</h1>
          <p className="editorial-description">Artigos sobre saúde da pele e dos cabelos para orientar os cuidados do dia a dia.</p>
        </div>
      </header>
      <div className="shell editorial-list">
        {["Pele", "Cabelo"].map((category) => (
          <section key={category} aria-labelledby={category.toLowerCase()}>
            <h2 className="editorial-heading" id={category.toLowerCase()}>{category}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {articles.filter((article) => article.category === category).map((article) => (
                <article key={article.slug} className="treatment-card editorial-card">
                  <Link href={`/conteudos/${article.slug}`} className="flex h-full flex-col">
                    <div className="card-image">
                      <Image src={imagePath(article.image)} alt="" fill sizes="(max-width: 639px) 100vw, 50vw" />
                    </div>
                    <div className="card-content flex flex-1 flex-col items-start">
                      <h3>{article.title}</h3>
                      <p>{article.summary}</p>
                      <span className="treatment-link">Ler artigo <ArrowRight size={16} aria-hidden="true" /></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
