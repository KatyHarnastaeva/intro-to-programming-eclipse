let today = new Date ();    
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("P");
copyright.innerHTML = '© Katy Harnastaeva ' + thisYear;
footer.appendChild(copyright);

let skills = [ "HTML", "CSS", "XML", "JavaScript", "jQuery", "SQL", "MySQL", "React", "Git", "Linux"];
let skillsSection = document.getElementById('skills');               
let skillsList = skillsSection.getElementsByTagName("UL")[0];    
for (let i=0; i<=skills.length-1; i++){
    let skill = document.createElement("LI");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

function removeMessage (event){
    let entry = event.target.parentNode;
    entry.remove();
}
let showMessage = false;
let messagesForm = document.querySelectorAll('[name="leave_message"]')[0];
messagesForm.addEventListener('submit', function(event){
    event.preventDefault();
    showMessage=true;
    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;
    console.log("Name is: " + name + " Email is: " + email + " Message: " + message);
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.getElementsByTagName("UL")[0];
    let newMessage = document.createElement("LI");
    newMessage.innerHTML = '<a href="mailto:'+ email + '">'+ name +'</a> <span>'+ message +'</span>';
    messageList.appendChild(newMessage);
    let removeButton = document.createElement("BUTTON");
    removeButton.innerText = "remove";
    removeButton.setAttribute('type', "button");
    removeButton.setAttribute('class', "button")
    removeButton.addEventListener('click', removeMessage);
    newMessage.appendChild(removeButton);
    event.target.reset();

    
} );

fetch("https://api.github.com/users/KatyHarnastaeva/repos")
    .then(response => response.json())
    .then(data => {
        let projectSection = document.getElementById("projects");
        let projectList = projectSection.getElementsByTagName("UL")[0];     
        for (let i=0; i < data.length; i++){
            let project = document.createElement("LI");
            project.innerHTML = '<a href="' + data[i].html_url + '">'+ data[i].name +'</a>';
            projectList.appendChild(project);
        }
    });