var studentsProfil = [
 {
    Name: "Rabab ali",
    Age: 23,
    Course: "modern Web Development Application",
    Email: "rabab@12345gmail.com",
    Image: "https://thumbs.dreamstime.com/b/turkish-girl-portrait-turkish-years-girl-looking-camera-selective-focus-174959234.jpg",

 },

 {
    Name: "Raza Khan",
    Age: 28,
    Course: "Data Science",
    Email: "khanraza2345gmail.com",
    Image: "https://i.pinimg.com/236x/38/02/6f/38026f6056749e4bc93fa16041070070.jpg",

 },

 {
    Name: "Sara Baloch",
    Age: 30,
    Course: "UI/UX",
    Email: "sarabaloch@3456gmail.com",
    Image: "https://i.pinimg.com/474x/95/70/92/9570927f64aee42ddba0896f6bb466b6.jpg",
 },

 {
    Name: "alliya Abro",
    Age: 26,
    Course: "Cloud Enginnering",
    Email: "alliya789@gmail.com",
    Image: "https://th.bing.com/th/id/R.4cea3e4ce7bb14794d955e03311bd939?rik=SFY0sRSg2ESurQ&pid=ImgRaw&r=0",
 },

 {
    Name: "Burhan Khan",
    Age: 34,
    Course: "Cyber Sceruity",
    Email: "burhan5678@gmail.com",
    Image: "https://img.freepik.com/premium-photo/charismatic-11yearold-turkish-boy-with-gentle-smile_1308-151132.jpg?w=2000",
 },

 {
    Name: "Bilal Ahmed",
    Age: 34,
    Course: "Robounting",
    Email: "bilalahmed3456@gmail.com",
    Image: "https://tse1.explicit.bing.net/th/id/OIP.ZmKelMuLeukM3aCyq32ObAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
 },

{
    Name: "Orangzaib Brohi",
    Age: 38,
    Course: "Grahpic designing",
    Email: "brohi890@gmail.com",
    Image: "https://img.freepik.com/premium-photo/resolute-15yearold-turkish-boy-with-steadfast-gaze_1308-153672.jpg",
},

{
    Name: "Laiba Asif",
    Age: 28,
    Course: "Phyton Programimg",
    Email: "laibaasif456@gmail.com",
    Image: "https://th.bing.com/th/id/R.879f85c86d4f3946af6914cc0d7391f0?rik=iQwwh6TUawBZNA&pid=ImgRaw&r=0",
},

{
    Name: "alizay Fatima",
    Age: 26,
    Course: "Advance JavaScript Learning",
    Email: "alizayfatima8790@gmail.com",
    Image: "https://tse3.mm.bing.net/th/id/OIP.RlEtJaFi2fIZva8KDgfmswHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
},

{
    Name: "Umm e laila",
    Age: 25,
    Course: "font-end development",
    Email: "laila2345@gmail.com",
    Image: "https://i.pinimg.com/originals/1c/71/75/1c717572f1d98a3c65fd42bafc45cce0.jpg",
},

]
console.log(studentsProfil);

const container = document.getElementById("cardContainer");

studentsProfil.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

card.innerHTML = `
        <img src="${student.Image}" alt="${student.Name}">
        <div class="info">
          <p><strong>Name:</strong> ${student.Name}</p>
          <p><strong>Age:</strong> ${student.Age}</p>
          <p><strong>Course:</strong> ${student.Course}</p>
          <p><strong>Email:</strong> ${student.Email}</p>
        </div>
      `;

      container.appendChild(card);
    });

 function toggleMode() {
    document.body.classList.toggle('dark');
   }