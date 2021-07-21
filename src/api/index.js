import * as axios from "axios";
import {urls} from "./urls";

// создаем и настраиваем инстанс аксиоса
const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'x-auth-token': 'b0cc176056174cd6bc7bfd20a5a11fd9',
    }
});

// список соревнований
export const getCompetitions = () => {
    return axiosInstance.get(urls.competitions())
        .then(response => {
            return response.data;
        })
};

// список команд
export const getTeams = () => {
    return axiosInstance.get(urls.teams())
        .then(response => {
            return response.data;
        })
};

// список матчей для конкретной команды
export const getTeamMatches = ({teamId, dateFrom, dateTo}) => {
    return axiosInstance.get(urls.teamsMatches({teamId, dateFrom, dateTo}))
        .then(response => {
            return response.data;
        })
}

// список матчей для чемпионата
export const getMatches = ({dateFrom, dateTo}) => {
    return axiosInstance.get(urls.matches({dateFrom, dateTo}))
        .then(response => {
            return response.data;
        })
}








