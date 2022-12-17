
import {z ,defineCollection } from "astro:content"


const test = defineCollection({
    schema: {
        title: z.string(),
        author:z.string().default("Shelton Louis")
}
})

const blog = defineCollection({
    schema: {
        title: z.string(),
        author: z.string().default("Shelton Louis"),
        description: z.string().min(15).max(150),
        draft: z.boolean().optional(),
        pubDate: z.string().transform((pubDate)=> new Date(pubDate)),
        heroImage: z.string().refine(
            (arg) => arg.match(/^\/.+\.(jpe?g|png|tiff)$/),
            (val)=> ({
                message: `${val} must start with a \ and end with a 
                .(jpe?g|png|tiff) `
        }))
}
})

export const collections = {
    test,
    blog
}