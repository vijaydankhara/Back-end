db.player.insertOne({
    Name: "Virat Kohli",
    Age: 32,
    Team: "India",
    IplTeam: "RCB"
});

// db.team.find()
db.team.insertOne({
    TeamName: "India",
    Captain: "Rohit Sharma",
    ViceCaptain: "Hardik Pandya",
    Wicketkeeper: "KL Rahul",
    HeadCoach: "Rahul Dravid",
    Batsman: ["Gill","Rohit","kohli","Surya","Rinku","Shreyash"],
    Wc: ["KL Rahul","Sanju"],
    AllRounder: ["Hardik","Jadeja","Shivam","Axar"],
    Bowlers: ["Siraj","Bumrah","Avesh","Mukesh","Kuldeep","Bisnoy"]
  });
  

db.match.insertOne({
    Team1: "India",
    Team2: "Pakistan",
    Venus: "Narendra Modi Stadium - Ahemdabad",
    Date: 11-12-2023, 
});

db.result.insertOne({
Ind: "350/3",
Pak: "170/10",
Result: "India Won By 180 Runs",
MOM: "Rohit Sharma"
});

db.batting.insertOne({
    Player:"Rohit Sharma",
    Runs: 175,
    Balls: 89,
    Fours: 16,
    Sixes: 12,
});

db.Bowling.insertOne({
    Player: "Siraj",
    Overs: 8,
    Runs: 12,
    Maiden: 4,
    Wickets: 6,
    Economy: 1.5,
    DotBolls: 25
});


