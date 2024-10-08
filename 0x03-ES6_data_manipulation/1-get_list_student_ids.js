export default function getListStudentIds(arr){
    if(arr instanceof Array){
        return arr.map(std => std.id);
    } else{
        return [];
    }
}