export const getRewardsInfo = `*[_type=="rewards"]`;
export const getCountOfTrees = `count(*[_type=="trees"])`;
export const getTrees = `*[_type=="trees"]`;
export const getTreesForMap = `*[_type=="trees"]
    {location, species, plantedby->{userName, _id}, _id, plantedDate}`;
export const getCountOfTreesByUser = (userId) => {
    return `count(*[_type=="trees" && plantedby._ref==${userId}])`
}