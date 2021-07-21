export const getDataSource = (items) => {
    return items.map(item => {
        return {
            id: item.id,
            crestUrl: item.crestUrl,
            name: item.name,
            area: item.area.name,
            address: item.address,
            phone: item.phone,
            website: item.website,
            email: item.email,
            founded: item.founded,
            clubColors: item.clubColors,
        }
    })
}