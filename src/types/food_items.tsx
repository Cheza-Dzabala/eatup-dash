import { buildSchema } from "@camberi/firecms";

export type foodItem = {
    name: string;
    price: number;
    description: string;
    image: string;
}

export const foodItemSchema = buildSchema<foodItem>({
    name: "Food Item",
    properties: {
        name: {
            title: "Name",
            dataType: 'string',
            validation: { required: true },
        },
        price: {
            title: "Price",
            dataType: 'number',
            validation: { required: true },
        },
        description: {
            title: "Description",
            dataType: 'string',
            validation: { required: true },
        },
        image: {
            title: "Image",
            dataType: 'string',
            validation: { required: true },
            config: {
                storageMeta: {
                    mediaType: "image",
                    storagePath: "images",
                    acceptedFiles: ["image/*"]
                }
            }
        },
    },
});