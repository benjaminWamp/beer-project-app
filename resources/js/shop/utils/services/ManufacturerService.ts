import axios from "axios";

export const fetchManufacturers = async () => {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/manufacturers"
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};
