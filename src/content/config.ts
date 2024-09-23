import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            position: z.number(),
            einleitung: z.object({
                text: z.string(),
                bildtext: z.string().optional(),
                primärfarbe: z.string(),
                sekundärfarbe: z.string(),
                bild: image(),
            }),
            slides: z
                .array(
                    z.object({
                        text: z.string().optional(),
                        bilder: z.array(image()),
                    })
                )
                .optional(),
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

// export const collections = {
//     projects: projectsCollection,
//     blog: blogCollection,
//     artworks: artworksCollection,
// };
