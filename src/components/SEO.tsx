import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  pathname?: string;
  type?: "website" | "article";
}

const BASE_URL = "https://gainde-communication.sn";

export default function SEO({
  title,
  description,
  keywords,
  pathname = "/",
  type = "website",
}: SEOProps) {
  const canonical = `${BASE_URL}${pathname}`;
  const fullTitle = title.includes("Gaïndé")
    ? title
    : `${title} | Gaïndé Communication`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
