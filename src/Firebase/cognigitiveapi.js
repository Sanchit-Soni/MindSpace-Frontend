import { db} from "../firebase";

const database=db.ref('cognigitive');

const Postdata=(key,category,sentiment,values,date,sentences)=>{
    console.log(key);
    let data={
        id:key,
        sentence:sentences,
        catgegory:category,
        sentiment:sentiment,
        value:values,
        date:date
    }
    database.push(data).then(doc=>{console.log(doc)}).catch(err=>{console.log(err)})

}

const Getdata=(value)=>{
    database.orderByChild('id').equalTo(value).once('value').then((snapshot)=>{
        console.log(snapshot.val())
    })
}

export  {Getdata};
export default Postdata;