import {NavLink} from "react-router-dom";

export const culumns = [ // Название колонок в таблице
    {
        title: "",
        crestUrl: "crestUrl",
        key: "crestUrl",
        render: (text, item) => <img style={{ maxWidth: '100px' }} src={item.crestUrl} alt='img'/>
    },
    {
        title: "Название команды",
        dataIndex: "name",
        key: "name",
        render: (text, item) => <NavLink to={`/teams/${item.id}/matches`}>{text}</NavLink>
    },
    {
        title: "Страна",
        dataIndex: "area",
        key: "area",
    },
    {
        title: "Адрес",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Телефон",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Сайт",
        dataIndex: "website",
        key: "website",
        render: (text, item) => <a href={item.website} target="_blank" rel="noreferrer" >{text}</a>
    },
    {
        title: "Эл. почта",
        dataIndex: "email",
        key: "email",
        render: (text, item) => <a href={`mailto:${item.email}`}>{item.email}</a>
    },
    {
        title: "Год основания клуба",
        dataIndex: "founded",
        key: "founded",
    },
    {
        title: "Цвет клуба",
        dataIndex: "clubColors",
        key: "clubColors",
    },
];