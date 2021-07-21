import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import moment from 'moment';
import {Table, DatePicker, Space, Divider, Spin} from 'antd';
import {getDataSource} from './common/getDataSource';
import {culumns} from './common/tableColumns';
import {getTeamMatches} from '../../api';
import {useQuery} from '../../hooks/useQuery';

export const TeamMatches = () => {

    const {teamId} = useParams();
    const history = useHistory();

    const [matches, setMatches] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const dateFrom = useQuery().get('dateFrom') ?? '2020-05-30';
    const dateTo = useQuery().get('dateTo') ?? '2021-05-30';

    useEffect(() => {
        getTeamMatches({teamId, dateFrom, dateTo}).then(data => {
            setMatches(getDataSource(data.matches));
            setLoaded(true);
        }).catch(err => {
            console.log(err);
        })
    }, [teamId, dateFrom, dateTo]);


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