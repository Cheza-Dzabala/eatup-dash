import { buildSchema, EntityReference } from "@camberi/firecms";

export type Menu = {
    name: 'string';
    description: 'string';
    image: 'string';
    items: EntityReference[];
};

export const menuSchema = buildSchema<Menu>({
    name: 'Menu',
    properties: {
        name: {
            title: "Name",
            dataType: 'string',
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
        items: {
            title: "Items",
            dataType: 'array',
            validation: { required: true },
            of: {
                dataType: "reference",
                path: "food_items",
                previewProperties: ["name", "image"]
            }
        },
    },
});