import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            thumbnail: image(),
            titel: z.string(),
            position: z.number(),
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
            bild: image().optional(),
            datum: z.date(),
        }),
});

const artworksCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            position: z.number(),
            titel: z.string(),
            bilder: z.array(image()),
        }),
});

export const collections = {
    projects: projectsCollection,
    blog: blogCollection,
    artworks: artworksCollection,
};
