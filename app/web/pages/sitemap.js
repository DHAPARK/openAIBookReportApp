import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const lastmod = new Date().toISOString();

  const defaultFields = [
    {
      loc: `https://easybookreport.swygbro.com`,
      changefreq: "weekly",
      priority: "1.0",
      lastmod,
    },
  ];

  const fields = [...defaultFields];

  return getServerSideSitemap(ctx, fields);
};

export default () => {
  return;
};
