import React, {useEffect, useState} from 'react';
import {Table, Input, Divider, Button, Space, Spin} from "antd";
import {getCompetitions} from "../../api";
import {getDataSource} from "./common/getDataSource";
import {culumns} from './common/tableColumns';
import 'antd/dist/antd.css';

const {Search} = Input;

export const CompetitionsList = () => {
    const [competitionsData, setCompetitionsData] = useState(null); //Тут будут данные с сервера
    const [isCompetitionsLoaded, setIsCompetitionsLoaded] = useState(false);// Это состояние для того, чтобы понять загрузились наши данные с сервера или нет

    // Тут будут данные по поиску
    const [filterSource, setFilterSource] = useState('')//Состояние для поиска сореванований
    const [filterArea, setFilterArea] = useState('')//Состояние для поиска места проведения соревнований

    useEffect(() => {
        getCompetitions().then((data) => {
            // кладем в стейт - сразу в виде  dataSource
            setCompetitionsData(getDataSource(data.competitions))
            setIsCompetitionsLoaded(true) // говорим, что данные загружены
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    if (!isCompetitionsLoaded) { // если данные не загружены показываем спиннер
        return <Spin/>
    }

    // Поиск по соревнованиям или по локации
    const searchDataSource = competitionsData.filter((item) => {
        return item.nameCompetition.toLowerCase().startsWith(filterSource) && item.area.toLowerCase().startsWith(filterArea.toLowerCase())
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

