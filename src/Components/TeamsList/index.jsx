import React, {useEffect, useState} from "react";
import {getTeams} from "../../api";
import {Table, Input, Divider, Button, Space, Spin} from "antd";
import {getDataSource} from "./common/getDataSource";
import {culumns} from '../TeamsList/common/tableColumns';
import 'antd/dist/antd.css';

const {Search} = Input;

export const TeamsList = (props) => {
    const [teamsData, setTeamsData] = useState(null) // Данные с сервера по командам
    const [isTeamsLoaded, setTeamsLoaded] = useState(false) // Это состояние для того, чтобы понять загрузились наши данные с сервера или нет

    // Тут будут данные по поиску
    const [filterTeams, setFilterTeams] = useState('')//Состояние для поиска команд

    useEffect(() => {
        getTeams().then((data) => {
            setTeamsData(getDataSource(data.teams))
            setTeamsLoaded(true)
        });
    }, [])

    if (!isTeamsLoaded) { // если данные не загружены показываем спиннер
        return <Spin/>
    }

    // Поиск по командам или по стране
    const searchDataSource = teamsData.filter((item) => {
        return item.name.toLowerCase().startsWith(filterTeams.toLowerCase())
    });

    const handleSearchTeams = (value) => {
        setFilterTeams(value);
    }

    return (
        <>
            <Space>
                <Search
                    placeholder="Название команды" enterButton onSearch={handleSearchTeams}
                    style={{width: "300px"}}
                />
            </Space>
            <Divider/>
            <Table bordered columns={culumns} dataSource={searchDataSource}/>
        </>
    )
}


