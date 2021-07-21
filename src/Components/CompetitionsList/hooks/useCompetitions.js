import {useState, useEffect} from 'react';
import {getCompetitions} from "../../../api";
import {getDataSource} from "../common/getDataSource";

export const useCompetitions = () => {
    const [competitionsData, setCompetitionsData] = useState(null); //Тут будут данные с сервера
    const [isCompetitionsLoaded, setIsCompetitionsLoaded] = useState(false);// Это состояние для того, чтобы понять загрузились наши данные с сервера или нет

    useEffect(() => {
        getCompetitions().then((data) => {
            // кладем в стейт - сразу в виде  dataSource
            setCompetitionsData(getDataSource(data.competitions))
            setIsCompetitionsLoaded(true) // говорим, что данные загружены
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return {isCompetitionsLoaded, competitionsData};
}