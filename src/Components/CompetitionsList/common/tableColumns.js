export const culumns = [ // Название колонок в таблице
    {
        title: "Название турнира",
        dataIndex: "nameCompetition",
        key: "nameCompetition",
        render: (text, item) => text
    },
    {
        title: "Место проведения",
        dataIndex: "area",
        key: "area",
        render: (text, item) => text
    },
    {
        title: "Код страны",
        dataIndex: "countryCode",
        key: "countryCode",
    },
    {
        title: "Начало сезона",
        dataIndex: "startDate",
        key: "startDate",
    },
    {
        title: "Конец сезона",
        dataIndex: "endDate",
        key: "andDate",
    },
];