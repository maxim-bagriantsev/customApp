import React, {useState} from 'react';
import {Table, Input, Divider, Button, Space, Spin} from "antd";

import {culumns} from './common/tableColumns';
import {useCompetitions} from './hooks/useCompetitions';
import 'antd/dist/antd.css';

const {Search} = Input;

export const CompetitionsList = () => {

    const [filterSource, setFilterSource] = useState('')//Состояние для поиска сореванований
    const [filterArea, setFilterArea] = useState('')//Состояние для поиска места проведения соревнований


    const {isCompetitionsLoaded, competitionsData} = useCompetitions();

    if (!isCompetitionsLoaded) { // если данные не загружены показываем спиннер
        return <Spin/>
    }

    // Поиск по соревнованиям или по локации
    const searchDataSource = competitionsData.filter((item) => {
        return item.nameCompetition.toLowerCase().startsWith(filterSource.toLowerCase()) && item.area.toLowerCase().startsWith(filterArea.toLowerCase())
    })

    const handleSearchCompetition = (value) => {
        setFilterSource(value);
    }

    const handleSearchArea = (value) => {
        setFilterArea(value);
    }

    return (
        <>
            <Space>
                <Search
                    placeholder="Поиск турниров" enterButton onSearch={handleSearchCompetition}
                    style={{width: "300px"}}
                />
                <Search
                    placeholder="Поиск по месту проведения турнира" enterButton onSearch={handleSearchArea}
                    style={{width: "300px"}}
                />
            </Space>
            <Divider/>
            <Table bordered columns={culumns} dataSource={searchDataSource}/>
        </>
    )
}