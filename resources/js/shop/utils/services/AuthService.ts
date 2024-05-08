import { UserLogin } from "../../types/user.types";
import axios from "axios";

const userData = {
    email: "cecile.valente@email.com",
    password: "password",
};

export const loginUser = async (userInfo: UserLogin) => {
    return await axios
        .post("http://127.0.0.1:8000/api/login", userInfo)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const logoutUser = async (token: string) => {
    return await axios
        .post(
            "http://127.0.0.1:8000/api/logout",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
