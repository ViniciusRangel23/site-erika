import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles } from "../articles";
import { imagePath } from "../../images";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return { title: `${article.title} | Erika Lucena Dermatologia`, description: article.summary };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main id="conteudo">
      <article>
        <header className="editorial-hero">
          <div className="shell">
            <Link href="/conteudos" className="editorial-back"><ArrowLeft size={16} aria-hidden="true" /> Todos os artigos</Link>
            <p className="eyebrow eyebrow-line">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="editorial-description">{article.summary}</p>
          </div>
        </header>
        <div className="shell article-body">
          <div className="card-image article-image">
            <Image src={imagePath(article.image)} alt="" fill sizes="(max-width: 767px) 100vw, 740px" />
          </div>
          {article.sections.map(({ title, text }) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <p className="article-source">
            <a href={article.source.url}>American Academy of Dermatology — {article.source.title}</a>
          </p>
        </div>
      </article>
    </main>
  );
}
