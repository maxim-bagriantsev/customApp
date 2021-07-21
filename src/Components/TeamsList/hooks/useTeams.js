import {useEffect, useState} from "react";
import {getTeams} from "../../../api";
import {getDataSource} from "../common/getDataSource";

export const useTeams = () => {
    const [teamsData, setTeamsData] = useState(null) // Данные с сервера по командам
    const [isTeamsLoaded, setTeamsLoaded] = useState(false) // Это состояние для того, чтобы понять загрузились наши данные с сервера или нет

    useEffect(() => {
        getTeams().then((data) => {
            setTeamsData(getDataSource(data.teams))
            setTeamsLoaded(true)
        });
    }, [])
    return {isTeamsLoaded, teamsData};
}