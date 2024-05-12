const user = localStorage.getItem("token");

export const findUser = async (id:number) => {
    console.log('COUCOU');
    
    const response = await fetch("http://127.0.0.1:8000/api/user/findUser", {
            method: "GET",
            body: JSON.stringify(id),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user}`,
            },
        });
        
        const jsonData = await response.json();
        console.log(jsonData);
}