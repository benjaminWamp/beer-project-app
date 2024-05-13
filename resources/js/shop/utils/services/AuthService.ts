import { UserLogin } from "../../types/user.types";
import axios from "axios";

export const loginUser = async (userInfo: UserLogin) => {
    return await axios
        .post("http://127.0.0.1:8000/api/login", userInfo)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw (Object.values(error.response.data.errors)[0] as string[])[0];
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
            throw (Object.values(error.response.data.errors)[0] as string[])[0];
        });
};
