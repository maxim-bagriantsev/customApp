import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {getDataSource} from './common/getDataSource';
import {getMatches} from '../../api/index';
import {useQuery} from "../../hooks/useQuery";
import {DatePicker, Divider, Space, Spin, Table} from "antd";
import {culumns} from "./common/tableColumns"
import moment from 'moment';

export const Matches = () => {

    const history = useHistory();

    const [matches, setMatches] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [isDateError, setIsDateError] = useState(false);

    const dateFrom = useQuery().get('dateFrom') ?? '2021-05-01';
    const dateTo = useQuery().get('dateTo') ?? '2021-05-09';

    useEffect(() => {
        getMatches({dateFrom, dateTo}).then(data => {
            setMatches(getDataSource(data.matches));
            setIsLoaded(true);
        }).catch(err => {
            console.log(JSON.stringify(err, null, 2));
        })
    }, [dateFrom, dateTo]);

    const onDataChange = (date, datesStr) => {

        // считаем разницу в днях между датами
        const diff = Math.abs(date[0].diff(date[1], 'days'));

        // если разница больше 10 дней - тогда показать ошибку
        if (diff > 10) {
            setIsDateError(true);
        } else {
            setIsDateError(false);
            // помещаем параметры в кверистринг
            history.push({
                search: `?dateFrom=${datesStr[0]}&dateTo=${datesStr[1]}`
            });
        }
    }

    if (!isLoaded) {
        return <Spin/>
    }

    const {RangePicker} = DatePicker;
    return (
        <>
            <>
                <Space direction="vertical" size={12}>
                    <RangePicker defaultValue={[moment(dateFrom), moment(dateTo)]} onChange={onDataChange}/>
                </Space>
                {isDateError &&
                <p style={{color: 'red'}}>Разница между началом периода и концом периода не должно превышать 10
                    дней</p>}
                <Divider/>
                <Table bordered columns={culumns} dataSource={matches}/>
            </>
        </>
    )
}

