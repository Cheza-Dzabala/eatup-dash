import { buildSchema, EntityReference } from "@camberi/firecms";

export type Special = {
    name: string;
    item: EntityReference;
};

export const specialsSchema = buildSchema<Special>({
    name: 'Special',
    properties: {
        name: {
            dataType: 'string',
            validation: { required: true },
        },
        item: {
            dataType: 'reference',
            path: 'food_items',
            validation: { required: true },
        }
    }
});