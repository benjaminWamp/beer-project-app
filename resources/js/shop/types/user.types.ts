export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
    number: number;
    street: string;
    city: string;
    zip_code: string;
    role: string;
}

export type UserLogin = Pick<User, "email" | "password">;
