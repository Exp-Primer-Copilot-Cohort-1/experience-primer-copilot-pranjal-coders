// Create a web server
// Create a comments route
// Create a form to submit new comments
// Create a list of comments
// Create a form to delete comments

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

let comments = [];

app.get('/comments', (req, res) => {
    let commentsList = comments.map((comment, index) => {
        return `<li>${comment} <form action="/comments" method="post"><button type="submit" name="delete" value="${index}">Delete</button></form></li>`;
    }).join('');
    res.send(`
        <h1>Comments</h1>
        <form action="/comments" method="post">
            <label for="comment">New comment:</label>
            <input type="text" name="comment">
            <button type="submit">Submit</button>
        </form>
        <ul>${commentsList}</ul>
    `);
});

app.post('/comments', (req, res) => {
    if (req.body.delete) {
        comments.splice(req.body.delete, 1);
    } else {
        comments.push(req.body.comment);
    }
    res.redirect('/comments');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});