export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(
        date
    );
    return formattedDate;
};
