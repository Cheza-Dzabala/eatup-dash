import { buildSchema, EntityReference } from "@camberi/firecms"

export type Offer = {
    name: string;
    price: number;
    item: EntityReference[];
    expirationDate: Date;
}

export const offersSchema = buildSchema<Offer>({
    name: 'Offers',
    properties: {
        name: {
            title: 'Name',
            dataType: 'string',
            validation: { required: true },
        },
        price: {
            title: 'Price',
            dataType: 'number',
            validation: { required: true },
        },
        item: {
            dataType: 'array',
            of: {
                dataType: 'reference',
                path: 'food_items',
                previewProperties: ['name', 'image'],
            },
        },
        expirationDate: {
            title: 'Expiration Date',
            dataType: 'timestamp',
            validation: { required: true },
        },
    },
});