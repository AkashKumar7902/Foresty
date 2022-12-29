export const getRewardsInfo = `*[_type=="rewards"]`;
export const getCountOfTrees = `count(*[_type=="trees"])`;
export const getTrees = `*[_type=="trees"]`;
export const getTreesForMap = `*[_type=="trees"]
    {location, species, plantedby->{userName, _id}, _id, plantedDate}`;
export const getCountOfTreesByUser = (userId) => {
    return `count(*[_type=="trees" && plantedby._ref==${userId}])`
}
export const getTreeById = (treeId) => {
    return `*[_type=="trees" && _id=='${treeId}'] {
        plantedDate,
        plantedby->{userName, _id},
        plant_image,
        species,
    }`
}
export const getUserById = (userId) => {
    return `*[_type=="user" && _id=='${userId}'] {
        _createdAt,
        userName,
        image,
        email,
        _id,
    }`
}