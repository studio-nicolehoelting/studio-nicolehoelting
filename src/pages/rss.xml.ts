import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
    const items = await getCollection("blog").then((collection) =>
        collection
            .sort((a, b) => (a.data.datum < b.data.datum ? 1 : -1))
            .filter((blog) => !blog.data.ankündigung)
            .map((blog) => ({
                title: blog.data.titel,
                pubDate: blog.data.datum,
                link: `/blog/${blog.slug}/`,
                description: blog.data.untertitel,
            }))
    );
    return rss({
        title: "Blog - Studio NH",
        description: "Immer auf dem neuesten Stand bleiben",
        site: context.site ?? "https://nicolehoelting.de",
        stylesheet: "/rss/styles.xsl",
        items,
        customData: `<language>de</language>`,
    });
};
