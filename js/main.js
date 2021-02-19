(function () {
  "use sctrict";
  window.addEventListener("DOMContentLoaded", () => {
    const entries = [
      {
        id: 1,
        company: "Photosnap",
        logo: "images/photosnap.svg",
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["HTML", "CSS", "JavaScript"],
        tools: [],
      },
      {
        id: 2,
        company: "Manage",
        logo: "images/manage.svg",
        new: true,
        featured: true,
        position: "Fullstack Developer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1d ago",
        contract: "Part Time",
        location: "Remote",
        languages: ["Python"],
        tools: ["React"],
      },
      {
        id: 3,
        company: "Account",
        logo: "images/account.svg",
        new: true,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2d ago",
        contract: "Part Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["React", "Sass"],
      },
      {
        id: 4,
        company: "MyHome",
        logo: "images/myhome.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "5d ago",
        contract: "Contract",
        location: "USA Only",
        languages: ["CSS", "JavaScript"],
        tools: [],
      },
      {
        id: 5,
        company: "Loop Studios",
        logo: "images/loop-studios.svg",
        new: false,
        featured: false,
        position: "Software Engineer",
        role: "FullStack",
        level: "Midweight",
        postedAt: "1w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript"],
        tools: ["Ruby", "Sass"],
      },
      {
        id: 6,
        company: "FaceIt",
        logo: "images/faceit.svg",
        new: false,
        featured: false,
        position: "Junior Backend Developer",
        role: "Backend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "UK Only",
        languages: ["Ruby"],
        tools: ["RoR"],
      },
      {
        id: 7,
        company: "Shortly",
        logo: "images/shortly.svg",
        new: false,
        featured: false,
        position: "Junior Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["HTML", "JavaScript"],
        tools: ["Sass"],
      },
      {
        id: 8,
        company: "Insure",
        logo: "images/insure.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["Vue", "Sass"],
      },
      {
        id: 9,
        company: "Eyecam Co.",
        logo: "images/eyecam-co.svg",
        new: false,
        featured: false,
        position: "Full Stack Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "3w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript", "Python"],
        tools: ["Django"],
      },
      {
        id: 10,
        company: "The Air Filter Company",
        logo: "images/the-air-filter-company.svg",
        new: false,
        featured: false,
        position: "Front-end Dev",
        role: "Frontend",
        level: "Junior",
        postedAt: "1mo ago",
        contract: "Part Time",
        location: "Worldwide",
        languages: ["JavaScript"],
        tools: ["React", "Sass"],
      },
    ];
    const entriesAtDom = document.querySelectorAll(".grid-element");
    const tags = document.querySelectorAll(".tag");
    const barFilters = document.querySelector("#filter-bar .container");
    const barFiltersSections = document.querySelectorAll(
      "#filter-bar .container .tagsContainer div"
    );
    let roleFilters = [],
      levelFilters = [],
      languageFilters = [],
      toolFilters = [],
      barFiltersArray = [];


    //Contstants for get each content from the entries list
    const roles = function () {
      const badRoles = entries.map(function (entrie) {
        return entrie.role;
      });
      const rolesArray = [...new Set(badRoles)];
      return rolesArray;
    };
    const levels = function () {
      const badLevels = entries.map(function (entrie) {
        return entrie.level;
      });
      const levelsArray = [...new Set(badLevels)];
      return levelsArray;
    };
    const languages = function () {
      let arraySucio = [];
      const sucio = entries.map((entrie) => {
        return entrie.languages;
      });
      sucio.forEach((suc) => {
        suc.forEach((lang) => {
          arraySucio.push(lang);
        });
      });
      const limpio = [...new Set(arraySucio)];
      return limpio;
    };
    const tools = function () {
      let arraySucio = [];
      const sucio = entries.map((entrie) => {
        return entrie.tools;
      });
      sucio.forEach((suc) => {
        suc.forEach((lang) => {
          arraySucio.push(lang);
        });
      });
      const limpio = [...new Set(arraySucio)];
      return limpio;
    };


    //Add event listeners for tags
    tags.forEach(function (tag) {
      tag.addEventListener("click", grabTag);
    });

    //Grab the tag wich was pressed
    function grabTag() {
      barFilters.classList.remove("hide");
      const filterTag = this.textContent;
      addCorrespondentFilter(filterTag);
      window.scrollTo(0, 0);
    }

    // Adding the tag to correspendent filter array
    function addCorrespondentFilter(filterTag) {
      let filterIs;
      //this if look in to the roles object looking if the filter tag belogns to role section
      if (roles().indexOf(filterTag) != -1) {
        //this if look in to the rolefilters array to find if the array alreeady contains the tag
        if (!roleFilters.includes(filterTag.toLowerCase())) {
          roleFilters.push(filterTag);
          console.log("se añadio a role");
          //this variable is passed to the next function to know where the tag belongs
          filterIs = "role";
          addToBar(filterTag, filterIs);
        }
      } else if (levels().indexOf(filterTag) != -1) {
        if (!levelFilters.includes(filterTag.toLowerCase())) {
          levelFilters.push(filterTag);
          console.log("se añadio a level");
          filterIs = "level";
          addToBar(filterTag, filterIs);
        }
      } else if (languages().indexOf(filterTag) != -1) {
        if (!languageFilters.includes(filterTag.toLowerCase())) {
          languageFilters.push(filterTag.toLowerCase());
          console.log("se añadio a language");
          filterIs = "language";
          addToBar(filterTag, filterIs);
        }
      } else if (tools().indexOf(filterTag) != -1) {
        if (!toolFilters.includes(filterTag.toLowerCase())) {
          toolFilters.push(filterTag.toLowerCase());
          console.log("se añadio a tools");
          filterIs = "tool";
          addToBar(filterTag, filterIs);
        }
      } else {
        window.alert("error perrin");
      }
    }
    //adding to the bar filter
    function addToBar(filterTag, filterIs) {
      if (!barFiltersArray.includes(filterTag)) {
        //Constants for create elemets in the DOM
        const div = document.createElement("div");
        const tagContainerElement = document.createElement("div");
        const span = document.createElement("span");
        const button = document.createElement("button");
        let sectionContainer, tagContainer, spanTag;
        // this switch analyze in wich of the section of the dom will be inserted the tag with its respective elements
        switch (filterIs) {
          case "role":
            sectionContainer = document.querySelector(
              "#filter-bar .container #roleContainer"
            );
            sectionContainer
              .appendChild(tagContainerElement)
              .appendChild(span)
              .parentElement.appendChild(button);
            tagContainer = sectionContainer.lastElementChild;
            tagContainer.setAttribute("class", "tagContainer");
            spanTag = tagContainer.firstElementChild;
            spanTag.setAttribute("class", "tag");
            spanTag.textContent = filterTag;

            break;
          case "level":
            sectionContainer = document.querySelector(
              "#filter-bar .container #levelContainer"
            );
            sectionContainer
              .appendChild(tagContainerElement)
              .appendChild(span)
              .parentElement.appendChild(button);
            tagContainer = sectionContainer.lastElementChild;
            tagContainer.setAttribute("class", "tagContainer");
            spanTag = tagContainer.firstElementChild;
            spanTag.setAttribute("class", "tag");
            spanTag.textContent = filterTag;

            break;
          case "language":
            sectionContainer = document.querySelector(
              "#filter-bar .container #languageContainer"
            );
            sectionContainer
              .appendChild(tagContainerElement)
              .appendChild(span)
              .parentElement.appendChild(button);
            tagContainer = sectionContainer.lastElementChild;
            tagContainer.setAttribute("class", "tagContainer");
            spanTag = tagContainer.firstElementChild;
            spanTag.setAttribute("class", "tag");
            spanTag.textContent = filterTag;

            break;
          case "tool":
            sectionContainer = document.querySelector(
              "#filter-bar .container #toolContainer"
            );
            sectionContainer
              .appendChild(tagContainerElement)
              .appendChild(span)
              .parentElement.appendChild(button);
            tagContainer = sectionContainer.lastElementChild;
            tagContainer.setAttribute("class", "tagContainer");
            spanTag = tagContainer.firstElementChild;
            spanTag.setAttribute("class", "tag");
            spanTag.textContent = filterTag;

            break;
          default:
            break;
        }

        if (document.querySelector("#clearAll")) {
          document
            .querySelector("#clearAll")
            .addEventListener("click", clearAllF);
        } else {
          const clearAllContainer = document.createElement("div");
          const clearAll = document.createElement("button");
          barFilters.appendChild(clearAllContainer).appendChild(clearAll);
          barFilters.lastChild.setAttribute("class", "clearAllContainer");
          barFilters.lastChild.firstChild.setAttribute("id", "clearAll");
          document
            .querySelector("#clearAll")
            .addEventListener("click", clearAllF);
          document.querySelector("#clearAll").innerHTML = "Clear";
        }

        const buttonsOfTags = document.querySelectorAll(
          "#filter-bar .container .tagContainer button"
        );
        //buttonsOfTags = document.querySelectorAll("#filter-bar button");
        buttonsOfTags.forEach((button) => {
          button.innerHTML = `<img src="images/icon-remove.svg">`;
        });
        buttonsOfTags.forEach((button) => {
          button.addEventListener("click", removeTag);
        });
      }
    }
    //Mutation observer for changes on the filter bar for trigger the filter on every new tag
    const observer = new MutationObserver(filterContent);
    const osberverOptions = {
      childList: true,
    };
    //const for grab all of the categories
    const categoryFilters = document.querySelector(
      "#filter-bar .container .tagsContainer"
    ).children;
    //adding the observer to every categorie
    for (const category of categoryFilters) {
      observer.observe(category, osberverOptions);
    }
    //This one just grab every entrie of the DOM
    function filterContent() {
      entriesAtDom.forEach((entrie) => {
        hide(entrie);
      });
    }

    function removeTag() {
      event.preventDefault();
      event.stopPropagation();
      //Detect id the target element is the image inside the button for correct selection of the father to remove
      if (event.target.hasAttribute("src")) {
        const father = event.target.parentElement.parentElement.parentElement;
        let index;
        // This one select the correct array to remove the tag from it and remove the bar tag
        switch (father.getAttribute("id")) {
          case "roleContainer":
            filterText = event.target.parentElement.previousSibling.textContent;
            index = roleFilters.indexOf(filterText);
            roleFilters.pop(index);
            //!!!!important this one shoul be the last because we need to detect the cnahge on the bar after we pop the element on the array
            father.removeChild(event.target.parentElement.parentElement);
            break;
          case "levelContainer":
            filterText = event.target.parentElement.previousSibling.textContent;
            index = levelFilters.indexOf(filterText);
            levelFilters.pop(index);
            father.removeChild(event.target.parentElement.parentElement);
            break;
          case "languageContainer":
            filterText = event.target.parentElement.previousSibling.textContent;
            index = languageFilters.indexOf(filterText);
            languageFilters.pop(index);
            father.removeChild(event.target.parentElement.parentElement);
            break;
          case "toolContainer":
            filterText = event.target.parentElement.previousSibling.textContent;
            index = toolFilters.indexOf(filterText);
            toolFilters.pop(index);
            father.removeChild(event.target.parentElement.parentElement);
            break;
        }
      } else {
        const father = event.target.parentElement.parentElement;
        let index;
        // This one select the correct array to remove the tag from it and remove the bar tag
        switch (father.getAttribute("id")) {
          case "roleContainer":
            filterText = event.target.previousSibling.textContent;
            index = roleFilters.indexOf(filterText);
            roleFilters.pop(index);
            //!!!!important this one shoul be the last because we need to detect the cnahge on the bar after we pop the element on the array
            father.removeChild(event.target.parentElement);
            break;
          case "levelContainer":
            filterText = event.target.previousSibling.textContent;
            index = levelFilters.indexOf(filterText);
            levelFilters.pop(index);
            father.removeChild(event.target.parentElement);
            break;
          case "languageContainer":
            filterText = event.target.previousSibling.textContent;
            index = languageFilters.indexOf(filterText);
            languageFilters.pop(index);
            father.removeChild(event.target.parentElement);
            break;
          case "toolContainer":
            filterText = event.target.previousSibling.textContent;
            index = toolFilters.indexOf(filterText);
            toolFilters.pop(index);
            father.removeChild(event.target.parentElement);
            break;
        }
      }
      /*if (document.querySelector("#roleContainer").innerHTML.trim() === "") {
        console.log("si esta avcio");
      }*/
      if (
        document.querySelector("#roleContainer").innerHTML.trim() === "" &&
        document.querySelector("#levelContainer").innerHTML.trim() === "" &&
        document.querySelector("#languageContainer").innerHTML.trim() === "" &&
        document.querySelector("#toolContainer").innerHTML.trim() === ""
      ) {
        document
          .querySelector("#filter-bar .container")
          .removeChild(document.querySelector(".clearAllContainer"));
        barFilters.classList.add("hide");
      } else {
        barFilters.classList.remove("hide");
      }
    }

    function hide(entrie) {
      //Role
      roleFilters = roleFilters.map((role) => {
        return role.toLowerCase();
      });
      roleFilters.sort();
      let entrieRoles = [];
      if (typeof entrie.dataset.role != "string") {
      } else {
        entrieRoles.push(entrie.dataset.role);
      }
      entrieRoles.sort();
      let roles = [];
      entrieRoles.forEach((entrieRole) => {
        roleFilters.forEach((filter) => {
          if (entrieRole === filter) {
            roles.push(true);
          } else {
            roles.push(false);
          }
        });
      });
      //level
      levelFilters = levelFilters.map((level) => {
        return level.toLowerCase();
      });
      levelFilters.sort();
      let entrieLevels = [];
      if (typeof entrie.dataset.level != "string") {
      } else {
        entrieLevels.push(entrie.dataset.level);
      }
      entrieLevels.sort();
      let levels = [];
      entrieLevels.forEach((entrieLevel) => {
        levelFilters.forEach((filter) => {
          if (entrieLevel === filter) {
            levels.push(true);
          } else {
            levels.push(false);
          }
        });
      });
      //Languages
      languageFilters = languageFilters.map((language) => {
        return language.toLowerCase();
      });
      languageFilters.sort();
      let entrieLanguages = entrie.dataset.languages.split(" ");
      entrieLanguages.sort();
      let languages = [];
      let filters = languageFilters.length;
      if (filters === 1) {
        console.log("si tengo un filtro");
        if (entrieLanguages.includes(languageFilters[0])) {
          languages.push(true);
        } else {
          languages.push(false);
        }
      } else {
        let count = 0;
        languageFilters.forEach((filter) => {
          entrieLanguages.forEach((language) => {
            if (filter === language) {
              count++;
            }
          });
        });
        if (count == filters) {
          languages.push(true);
        } else {
          languages.push(false);
        }
      }
      console.log(languages);
      //Tools
      toolFilters = toolFilters.map((tool) => {
        return tool.toLowerCase();
      });
      toolFilters.sort();
      let entrieTools = entrie.dataset.tools.split(" ");
      entrieTools.sort();
      let tools = [];
      filters = toolFilters.length;
      if (filters === 1) {
        if (entrieTools.includes(toolFilters[0])) {
          tools.push(true);
        } else {
          tools.push(false);
        }
      } else {
        let count = 0;
        toolFilters.forEach((filter) => {
          entrieTools.forEach((tool) => {
            if (filter === tool) {
              count++;
            }
          });
        });
        if (count == filters) {
          languages.push(true);
        } else {
          languages.push(false);
        }
      }

      //Separar el entrie lenguages por que me esta dando un arreglo con una cadena de texto
      //Global condition
      if (
        (!roles.includes(false) &&
          !levels.includes(false) &&
          !languages.includes(false) &&
          !tools.includes(false)) ||
        (levelFilters === "" &&
          roleFilters === "" &&
          toolFilters === "" &&
          languageFilters === "")
      ) {
        entrie.classList.remove("hide");
      } else {
        entrie.classList.add("hide");
      }
    }

    function clearAllF() {
      roleFilters = [];
      levelFilters = [];
      languageFilters = [];
      toolFilters = [];
      barFiltersArray = [];
      allFilters = [];

      barFiltersSections.forEach((sections) => {
        sections.innerHTML = "";
      });
      entriesAtDom.forEach((entrie) => {
        entrie.classList.remove("hide");
      });
      document
        .querySelector("#filter-bar .container")
        .removeChild(document.querySelector(".clearAllContainer"));
      barFilters.classList.add("hide");
    }
  });
})();

/* falta unir arrays para de filtros para obtener la barra, y añadir o quitar clases, dependiendo de cada filtro que sea presionado
y comprarlo con el contenido de cada uno de los elementos de el dom, es decir
si se presiona el tag y se compara el filtro de la categoria que corresponde con el set de cada elemento
si el elemento contiene el filtro entonces se muestra, si no, no;*/
