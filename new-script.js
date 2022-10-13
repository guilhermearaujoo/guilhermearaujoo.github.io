window.onload = function () {
  function generateNav() {
    // gera a nav principal
    let nav = document.getElementById("nav-fixed");
    let names = ["Home", "Projects", "About me", "Abilities"];
    let links = ["#home", "#projects", "about-me", "abilities"];
    let ul = document.createElement("ul");

    for (let index = 0; index < 4; index += 1) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.innerText = names[index];
      a.setAttribute("href", links[index]);
      li.appendChild(a);
      ul.appendChild(li);
    }
    nav.appendChild(ul);
  }

  function generateProjects() {
    let sectionProject = document.getElementById("projects-imgs");
    let imagesLink = ['./images/comming.jpg', './images/comming.jpg', './images/comming.jpg', './images/comming.jpg'];
    let projectsName = ['Um projeto sobre mim.', 'Um projeto sobre mim.', 'Um projeto sobre mim.', 'Um projeto sobre mim.'];

    for (let index = 0; index < 2; index += 1) {
      let section = document.createElement('section');
      sectionProject.appendChild(section);
      for (let i = 0; i < 2; i += 1) {
        let div = document.createElement('div');
        div.className = 'div-img';
        section.appendChild(div);
        let img = document.createElement('img');
        div.appendChild(img);
        img.id = `img-${index}-${i}`;
        img.setAttribute('src', imagesLink[i+index])
        let paragraph = document.createElement('p');
        paragraph.innerText = projectsName[index];
        div.appendChild(paragraph);
      }
    }
  }

  function initial() {
    generateNav();
    generateProjects();
  }
  initial();
};
