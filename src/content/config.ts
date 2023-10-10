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

export const collections = {
    projects: projectsCollection,
};
