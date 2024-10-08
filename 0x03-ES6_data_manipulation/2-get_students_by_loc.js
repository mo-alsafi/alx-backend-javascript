export default function getStudentsByLocation(stds, city){
    return stds.filter(stds => stds.location === city);
}