const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", async (req, res) => {
    return console.log("check")
});

app.get("/userList", async (req, res) => {
    const snapshot = await User.orderBy('itemId', 'desc').limit(10000).get()
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    let total = list.length;
    res.send({ data: { total: total, users: list } });
});


app.post("/create", async (req, res) => {
    const data = req.body;
    let mulData = [];
    for (var i = 1; i <= 4000; i++) {
        mulData.push({
            "name": "atul" + i,
            "itemId": i.toString(),
            "age": 30,
            "collage": "lpu"
        })
    }

    // mulData.forEach(function (obj) {
    //     User.doc(obj.itemId)
    //         .set(obj)
    //         .then(function (docRef) {
    //             console.log("Document written" + obj.itemId);
    //         })
    //         .catch(function (error) {
    //             console.error("Error adding document: ", error);
    //         });
    // });

    res.send({ msg: "User Added" });
});
app.listen(4000, () => console.log("Up & RUnning *4000"));