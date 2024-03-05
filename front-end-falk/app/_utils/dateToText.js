const dateToText = (date) => {
    const data = new Date(date);

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const year = data.getUTCFullYear();
    const month = meses[data.getUTCMonth()];

    return `${month} ${year}`;
};

export default dateToText;