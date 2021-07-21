import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import moment from 'moment';
import {Table, DatePicker, Space, Divider, Spin} from 'antd';
import {getDataSource} from './common/getDataSource';
import {culumns} from './common/tableColumns';
import {getTeamMatches} from '../../api';
import {useQuery} from '../../hooks/useQuery';
import {useTeamMatches} from "./hooks/useTeamMatches";

export const TeamMatches = () => {
    const history = useHistory();

    const {loaded, matches, dateFrom, dateTo} = useTeamMatches()

    const onDataChange = (date, datesStr) => {
        // помещаем параметры в кверистринг
        history.push({
            search: `?dateFrom=${datesStr[0]}&dateTo=${datesStr[1]}`
        });
    }

    if (!loaded) {
        return <Spin/>
    }

    const {RangePicker} = DatePicker;
    return (
        <>
            <Space direction="vertical" size={12}>
                <RangePicker defaultValue={[moment(dateFrom), moment(dateTo)]} onChange={onDataChange}/>
            </Space>
            <Divider/>
            <Table bordered columns={culumns} dataSource={matches}/>
        </>
    )
}