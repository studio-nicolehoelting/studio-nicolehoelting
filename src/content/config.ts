import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            thumbnail: image(),
            titel: z.string(),
            priorität: z.number(),
            entwurf: z.boolean().optional(),
        }),
});

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            ankündigung: z.boolean().optional(),
            titel: z.string(),
            untertitel: z.string().optional(),
            bild: image(),
            datum: z.date(),
            entwurf: z.boolean().optional(),
        }),
});

const artworksCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            priorität: z.number(),
            titel: z.string(),
            bilder: z.array(image()),
        }),
});

const rezensionenCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        datum: z.date(),
    }),
});

export const collections = {
    projects: projectsCollection,
    blog: blogCollection,
    artworks: artworksCollection,
    rezensionen: rezensionenCollection,
};
