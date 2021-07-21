export const getDataSource = (competitions) => {
    return competitions.map(item => {
        return {
            id: item.id,
            nameCompetition: item.name,
            area: item.area.name,
            countryCode: item.area.countryCode,
            startDate: new Date(item.currentSeason?.startDate).toLocaleDateString(),
            endDate: new Date(item.currentSeason?.endDate).toLocaleDateString(),
        }
    })
}
