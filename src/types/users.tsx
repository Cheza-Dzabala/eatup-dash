import {
    buildSchema,
} from "@camberi/firecms";

export type User = {
    first_name: 'string';
    last_name: 'string';
    phone_number: 'string';
    email: 'string',
    preferred_name: 'string',
}

export const userSchema = buildSchema<User>({
    name: "Users",
    properties: {
        first_name: {
            title: "First Name",
            dataType: 'string',
            validation: { required: true },
        },
        last_name: {
            title: "Last Name",
            dataType: 'string',
            validation: { required: true },
        },
        phone_number: {
            title: "Phone Number",
            dataType: 'string',
            validation: { required: true },
        },
        email: {
            title: "Email",
            dataType: 'string',
            validation: { required: true },
        },
        preferred_name: {
            title: "Preferred Name",
            dataType: 'string',
            validation: { required: true },
        },
    }
});