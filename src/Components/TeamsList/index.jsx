import React, {useState} from "react";
import {Table, Input, Divider, Button, Space, Spin} from "antd";
import {culumns} from '../TeamsList/common/tableColumns';
import 'antd/dist/antd.css';
import {useTeams} from "./hooks/useTeams";

const {Search} = Input;

export const TeamsList = (props) => {
    const [filterTeams, setFilterTeams] = useState('')//Состояние для поиска команд

    const {isTeamsLoaded, teamsData} = useTeams();

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


