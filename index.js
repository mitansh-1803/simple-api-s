const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));



app.get('/movie',(req,res)=>{
    res.send([{"Title":"Avengers: Infinity War","Year":"2018","imdbID":"tt4154756","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},
    {"Title":"Captain America: Civil War","Year":"2016","imdbID":"tt3498820","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"},
    {"Title":"World War Z","Year":"2013","imdbID":"tt0816711","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},
    {"Title":"War of the Worlds","Year":"2005","imdbID":"tt0407304","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"},
    {"Title":"Lord of War","Year":"2005","imdbID":"tt0399295","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},
    {"Title":"War for the Planet of the Apes","Year":"2017","imdbID":"tt3450958","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg"},
    {"Title":"War Dogs","Year":"2016","imdbID":"tt2005151","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"},
    {"Title":"This Means War","Year":"2012","imdbID":"tt1596350","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg"},
    {"Title":"War Horse","Year":"2011","imdbID":"tt1568911","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"},
    {"Title":"Charlie Wilson's War","Year":"2007","imdbID":"tt0472062","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"}]);
})

app.get('/cricket',(req,res)=>{
    res.send([{"id": 1,"fullName": "Don Bradman","nationality": "AUS","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 2,"fullName": "Steve Smith","nationality": "AUS","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 3,"fullName": "Len Hutton","nationality": "ENG","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 4,"fullName": "Jack Hobbs","nationality": "ENG","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 5,"fullName": "Ricky Ponting","nationality": "AUS","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 6,"fullName": "Peter May","nationality": "ENG","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 7,"fullName": "Kumar Sangakkara","nationality": "SL","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 8,"fullName": "Garry Sobers","nationality": "WI","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 9,"fullName": "Viv Richards","nationality": "WI","rightArmedBowl": false,"rightHandedBat": false},
    {"id": 10,"fullName": "Clyde Walcott","nationality": "WI","rightArmedBowl": false,"rightHandedBat": false}]);
})

app.get('/home',(req,res)=>{
    res.send([{"id":"1","name":"ENFP","description":"A Campaigner (ENFP) is someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions.","image":"https://miro.medium.com/max/838/1*alrQes_sNuLfhRlf9Hr7AA.png","personality":"Campaigner"},
    {"id":"2","name":"ISTJ","description":"A Logistician (ISTJ) is someone with the Introverted, Observant, Thinking, and Judging personality traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose.","image":"https://i.pinimg.com/originals/c2/d4/2f/c2d42ff922d89b94c0b60b704c51a597.png","personality":"Logistician"},
    {"id":"3","name":"ISFJ","description":"A Defender (ISFJ) is someone with the Introverted, Observant, Feeling, and Judging personality traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives.","image":"https://i.pinimg.com/originals/ce/08/80/ce0880a2e70c93a8d5da0ce2a1789857.png","personality":"Defender"},
    {"id":"4","name":"ESFJ","description":"A Consul (ESFJ) is a person with the Extraverted, Observant, Feeling, and Judging personality traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others.","image":"https://i.pinimg.com/originals/0b/fb/0e/0bfb0ee6438393d04b2a23421a7d69e7.png","personality":"Consul"},
    {"id":"5","name":"INFJ","description":"An Advocate (INFJ) is someone with the Introverted, Intuitive, Feeling, and Judging personality traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things.","image":"https://i.pinimg.com/originals/19/7f/cb/197fcbb50ff006b9d3e028bb8ee2a04a.png","personality":"Advocate"},
    {"id":"6","name":"INTJ","description":"An Architect (INTJ) is a person with the Introverted, Intuitive, Thinking, and Judging personality traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one.","image":"http://i.pinimg.com/originals/b1/61/01/b161015ab29fa186d2a83dfb4eb278f1.png","personality":"Architect"},
    {"id":"7","name":"ISTP","description":"A Virtuoso (ISTP) is someone with the Introverted, Observant, Thinking, and Prospecting personality traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed.","image":"https://i.pinimg.com/originals/53/33/32/533332eb28b771dc09e975d79baba988.png","personality":"Virtuoso"},
    {"id":"8","name":"ENFJ","description":"A Protagonist (ENFJ) is a person with the Extraverted, Intuitive, Feeling, and Judging personality traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals.","image":"http://2.bp.blogspot.com/-x0ZL3ey9Q14/VXm_hJ_7LyI/AAAAAAAAADI/rcijRVen6y8/s1600/enfj.png","personality":"Protagonist"},
    {"id":"9","name":"ISFP","description":"An Adventurer (ISFP) is a person with the Introverted, Observant, Feeling, and Prospecting personality traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials.","image":"https://i.pinimg.com/originals/bc/08/95/bc08958ee1bb85b3d9a3ca0b2eb13bb1.png","personality":"Adventurer"},
    {"id":"10","name":"INFP","description":"A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do.","image":"https://i.pinimg.com/originals/49/5a/fb/495afb93f7bfaff8619ec3b15b91f59f.png","personality":"Mediator"},
    {"id":"11","name":"INTP","description":"A Logician (INTP) is someone with the Introverted, Intuitive, Thinking, and Prospecting personality traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity.","image":"https://i.pinimg.com/originals/07/39/55/07395546afbbcae05d74aa67bc0c61f0.png","personality":"Logician"},
    {"id":"12","name":"ENTJ","description":"A Commander (ENTJ) is someone with the Extraverted, Intuitive, Thinking, and Judging personality traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them.","image":"https://i.pinimg.com/originals/6e/7a/46/6e7a4622d5fef2947961c779ee54b2d8.png","personality":"Commander"},
    {"id":"13","name":"ESTP","description":"An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.","image":"https://i.pinimg.com/originals/e7/47/9d/e7479d5969e4673e18d023a7efd057db.png","personality":"Entrepreneur"},
    {"id":"14","name":"ESFP","description":"An Entertainer (ESFP) is a person with the Extraverted, Observant, Feeling, and Prospecting personality traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities.","image":"https://i.pinimg.com/originals/a3/d1/e7/a3d1e71bbe3dba8fff471a9963643333.png","personality":"Entertainer"},
    {"id":"15","name":"ENTP","description":"A Debater (ENTP) is a person with the Extraverted, Intuitive, Thinking, and Prospecting personality traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter.","image":"https://i.pinimg.com/originals/5a/9b/e9/5a9be9f28021cb9a34b5f4ba8516f04a.png","personality":"Debater"},
    {"id":"16","name":"ESTJ","description":"An Executive (ESTJ) is someone with the Extraverted, Observant, Thinking, and Judging personality traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity.","image":"https://i.pinimg.com/originals/0b/b5/20/0bb52077456664681199bafa9c12b6d3.png","personality":"Executive"}]);
})

app.get('/update',(req,res)=>{
    console.log(req.body)
    res.sendFile(__dirname + '/static/index.html')
})
app.post('/login', (req, res) => {

    let userData = {    
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        age: req.body.age
    }
    fs.writeFileSync('userData.txt',JSON.stringify(userData))
});
app.use(function(req, res){
    res. status(404);
    res.send("404 Not Found")
}) 

app.listen(3000,() => console.log('Listening to port 3000....'));