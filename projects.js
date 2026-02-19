function proj_button(project) {
    const div_spawn = document.getElementById("buttons-container");

    lnk = document.createElement("a");
    lnk.target = "_blank";
    lnk.href = project.URL;
    lnk.classList.add("project");
    lnk.id = project.Id;

    div_spawn.append(lnk);

    tec = document.createElement("div");
    tec.classList.add("tech");
    tec.innerHTML = project.Tech;

    lnk.append(tec);

    img = document.createElement("img");
    img.src = "images/" + project.Image;
    img.style.width = "312px";
    img.style.height = "256px";
    img.style.transition = "transform ease 0.2s";
    img.id = "image-" + project.Id;
    img.classList.add("project-image");

    lnk.append(img);

    slider = document.createElement("div");
    slider.style.transform = "translateY(0px)";
    slider.id = `slider-${project.Id}`;
    slider.classList.add("sliding");
    lnk.append(slider);

    title = document.createElement("p");
    title.classList.add("project-title");
    title.innerHTML = project.Title;
    slider.append(title);

    desc = document.createElement("p");
    desc.classList.add("project-description");
    desc.innerHTML = project.Description;
    slider.append(desc);

    lnk.addEventListener("mouseenter", (event) => {
        id = event.target.id;
        sl = document.getElementById("slider-" + id);
        sl.style.transform = "translateY(-50%)";
        im = document.getElementById("image-" + id);
        im.style.transform = "scale(1.05)";
    });
    lnk.addEventListener("mouseleave", (event) => {
        id = event.target.id;
        sl = document.getElementById("slider-" + id);
        sl.style.transform = "translateY(0)";
        im = document.getElementById("image-" + id);
        im.style.transform = "scale(1)";
    });
}

function spawn_buttons(json) {
    projects = json.Projects;
    for (i in projects){
        proj_button(projects[i]);
    }
}

fetch("./projects.json")
    .then((response) => response.json())
    .then((json) => spawn_buttons(json));
