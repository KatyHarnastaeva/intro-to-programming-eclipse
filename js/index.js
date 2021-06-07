let today = new Date ();    
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("P");
copyright.innerHTML = 'Katy Harnastaeva ' + thisYear;
footer.appendChild(copyright);

let skills = [ "HTML", "JS", "Git" ,"Visual Studio", "CSS"];
let skillsSection = document.getElementById('skills');               
let skillsList = skillsSection.getElementsByTagName("UL")[0];    
for (let i=0; i<=skills.length-1; i++){
    let skill = document.createElement("LI");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}   
