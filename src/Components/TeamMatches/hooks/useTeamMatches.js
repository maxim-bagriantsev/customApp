import {useEffect, useState} from "react";
import {getTeamMatches} from "../../../api";
import {getDataSource} from "../common/getDataSource";

export const useTeamMatches = ({teamId, dateFrom, dateTo}) => {

    const [matches, setMatches] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getTeamMatches({teamId, dateFrom, dateTo}).then(data => {
            setMatches(getDataSource(data.matches));
            setLoaded(true);
        }).catch(err => {
            console.log(err);
        })
    }, [teamId, dateFrom, dateTo]);

    return {loaded, matches, dateFrom, dateTo}
}
