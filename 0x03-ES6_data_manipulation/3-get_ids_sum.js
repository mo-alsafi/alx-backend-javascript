export default function getStudentIdsSum(stds){
    return stds.reduce((total, stds) => {
        return total + stds.id;
    }, 0)
}