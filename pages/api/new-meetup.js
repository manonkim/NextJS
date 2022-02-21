import { MongoClient } from "mongodb";
//서버에서만 돌아감 클라한테 노출안됨
// /api/net-meetup
// only POST /api/net-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://abd:ehM3Cr1mwMbDoWg3@cluster0.6baoc.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    //collection은 SQL DB에 있는 tables이고 문서는 해당 tables의 항목
    //단일 meetup은 하나의 문서 > collection = 여러 문서(meetup)를 보관
    const meetupsCollection = db.collection("meetups"); //collection name 아무거나 지정가능

    //컬렉션에 새 문서를 삽입하기위해 query명령 중 하나인 insertOne 호출
    //mongodb는 문서가 JS의 obejct
    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    //입력 후 db 연결 차단
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
