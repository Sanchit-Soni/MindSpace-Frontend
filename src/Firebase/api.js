import { db} from "./../firebase";

const database=db.ref('facesnap');

const Post=(key,mood,date)=>{
    let data={
        id:key,
        mood:mood,
        date:date
    }
    database.push(data).then(data=>{
        console.log('saved')
    }).catch(err=>{
        console.log(err)
    })
}

const Getdata=async (value)=>{
    const data=database.orderByChild('id').equalTo(value).once('value');
    console.log(data);
    return data.val()
}

export default Post;
export {Getdata};