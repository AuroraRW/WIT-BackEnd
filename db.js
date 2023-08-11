// without ORM
let sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./cards.db', function () {
        db.run("insert into cards values(1, 'Lily', 'Developer', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 7, 1234)", function () {
            db.all("select * from cards", function (err, res) {
                if (!err)
                    console.log(JSON.stringify(res));
                else
                    console.log(err);
            });
        })
});