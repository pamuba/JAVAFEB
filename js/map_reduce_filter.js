//map

// var officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 24, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
//   ];

// //   var ids = [];

// //   officers.forEach(function(officer){
// //       ids.push(officer.id)
// //   })

// //   console.log(ids)


// var ids = officers.map(officer=>officer.id)
// console.log(ids)

//reduce
// var pilots = [
//     {
//       id: 10,
//       name: "Poe Dameron",
//       years: 14,
//     },
//     {
//       id: 2,
//       name: "Temmin 'Snap' Wexley",
//       years: 30,
//     },
//     {
//       id: 41,
//       name: "Tallissan Lintra",
//       years: 16,
//     },
//     {
//       id: 99,
//       name: "Ello Asty",
//       years: 22,
//     }
//   ];

//   var totalExp = pilots.reduce((oldest, pilot)=>{
//       return (oldest.years || 0)> pilot.years ? oldest : pilot
//     },{})
//   console.log(totalExp)

// var pilots = [
//     {
//       id: 2,
//       name: "Wedge Antilles",
//       faction: "Rebels",
//     },
//     {
//       id: 8,
//       name: "Ciena Ree",
//       faction: "Empire",
//     },
//     {
//       id: 40,
//       name: "Iden Versio",
//       faction: "Empire",
//     },
//     {
//       id: 66,
//       name: "Thane Kyrell",
//       faction: "Rebels",
//     }
//   ];

//   var rebels = pilots.filter(pilot=> pilot.faction === "Rebels")
//   console.log(rebels)
  
//   var empire = pilots.filter(pilot=> pilot.faction === "Empire")
//   console.log(empire)


// data => map.reduce.filter


var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

//   var totalJediScore = personnel
//   .filter(function (person) {
//     return person.isForceUser;
//   })
//   .map(function (jedi) {
//     return jedi.pilotingScore + jedi.shootingScore;
//   })
//   .reduce(function (acc, score) {
//     return acc + score;
//   }, 0);

const totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(totalJediScore)