export const urls = {
    competitions: () => '/competitions/',
    teams: () => '/teams/',
    teamsMatches: ({teamId, dateFrom, dateTo}) => `/teams/${teamId}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
    competitionMatches: ({
                             competitionId, dateFrom, dateTo
                         }) => `/competitions/${competitionId}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
    matches: ({dateFrom, dateTo}) => `/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
}