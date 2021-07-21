import { NavLink } from 'react-router-dom';
import { urls } from '../../../api/urls';

export const culumns = [ // Название колонок в таблице
    {
        title: "Начало сезона",
        dataIndex: "startDate",
        key: "startDate",
    },
    {
        title: "Конец сезона",
        dataIndex: "endDate",
        key: "endDate",
    },
    {
        title: "Статус",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Чемпионат",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Место проведения",
        dataIndex: "area",
        key: "area",
        render: (text, item) => <div style={{ textAlign: 'center' }}><img style={{ maxWidth: '100px' }} src={item.ensignUrl} alt='country flag' /><p >{text}</p></div>
    },
    {
        title: "Домашняя команда",
        dataIndex: "homeTeam",
        key: "homeTeam",
    },
    {
        title: "Чужая команда",
        dataIndex: "awayTeam",
        key: "awayTeam",
    },
    {
        title: "Победитель",
        dataIndex: "winnerName",
        key: "winnerName",
        render: (text, item) => <div style={{ textAlign: 'center' }}><img style={{ maxWidth: '50px' }} src={item.winnerCrestUrl} alt='winner flag' /><p>{text}</p></div>
    },
];