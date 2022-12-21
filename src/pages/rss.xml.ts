import rss from "@astrojs/rss";
import { getCollection } from "astro:content";


export const get = async () => {
  
  const posts = await getCollection("blog");
  return rss({
    title: import.meta.env.SITE_TITLE,
    description: import.meta.env.SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: post.slug,
    })),
  });
  
}

