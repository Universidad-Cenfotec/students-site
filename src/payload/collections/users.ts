import type { CollectionConfig } from "payload";

const Users: CollectionConfig = {
    slug: "users",
    auth: true, // Enables login/logout
    admin: { useAsTitle: "email" },
    access: { read: () => true }, // Allows public reading of users
    fields: [
        {
            name: "role",
            type: "select",
            required: true,
            options: [
                { label: "Admin", value: "admin" },
                { label: "Editor", value: "editor" },
                { label: "User", value: "user" },
            ],
            defaultValue: "user",
        },
    ],
};

export default Users;
