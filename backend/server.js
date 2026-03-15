import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.get('/jokes' ,(req,res) => {
    const jokes = [
        {
            id: 1,
            content: "Why don't scientists trust atoms? Because they make up everything!"

        },
        {
            id: 2,
            content: "Why did the bicycle fall over? Because it was two-tired!"    
        },
        {
            id: 3,
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 4,
            content: "Why don't skeletons fight each other? They don't have the guts!"
        },
        {
            id: 5,
            content: "Why did the tomato turn red? Because it saw the salad dressing!"
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT|| 3000;

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})