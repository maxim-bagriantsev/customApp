 export const getDataSource = (competitions) => {

    return competitions.map(item => {
        return {
            id: item.id,
            name: item.competition?.name,
            area: item.competition?.area?.name,
            ensignUrl: item.competition?.area?.ensignUrl,
            startDate: new Date(item.season?.startDate).toLocaleDateString(),
            endDate: new Date(item.season?.endDate).toLocaleDateString(),
            winnerName: item.season?.winner?.name,
            winnerCrestUrl: item.season?.winner?.crestUrl,
            status: item.status,
            homeTeam: item.homeTeam?.name,
            awayTeam: item.awayTeam?.name
        }
    })
}
