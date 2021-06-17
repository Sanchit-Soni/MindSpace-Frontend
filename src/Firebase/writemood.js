import { db } from "../firebase";

const database = db.ref("writemood");

const Postdata = (key, sentiments, values, date) => {
  let data = {
    id: key,
    sentiments: sentiments,
    values: values,
    date: date,
  };
  database
    .push(data)
    .then((doc) => console.log("saved"))
    .catch((err) => console.log(err));
};

const GetDataById = async (id) => {
  const data=await database
    .orderByChild("id")
    .equalTo(id)
    .once("value");
    return data.val()
};

export default database;
export { Postdata, GetDataById };
