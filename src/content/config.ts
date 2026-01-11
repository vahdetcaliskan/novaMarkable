import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        coverImage: z.string(),
        price: z.number().optional(),
        shopLinks: z
            .object({
                etsy: z.string().url().optional(),
                gumroad: z.string().url().optional(),
                shopify: z.string().url().optional(),
            })
            .optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    products,
};
