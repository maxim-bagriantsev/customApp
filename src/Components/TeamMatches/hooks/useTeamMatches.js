import {useEffect, useState} from "react";
import {getTeamMatches} from "../../../api";
import {getDataSource} from "../common/getDataSource";
import {useQuery} from "../../../hooks/useQuery";
import {useParams} from "react-router-dom";

export const useTeamMatches = () => {
    const {teamId} = useParams();

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

    return {loaded, matches, dateFrom, dateTo}
}
