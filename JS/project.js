document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const projects = {
    "cloud-wander": {
        title: "Cloud Wander",
        date: "05/2026",
        description: "Cloud Wander is a free-to-play mobile game, featuring a 2D isometric view and designed for vertical orientation.",
        about: "The protagonist lives in a hot air balloon and seeks to explore the world from the sky. Throughout the adventure, the player will unlock different biomes, tame various types of birds, and collect items and treasures.",
        role: "My work consisted of implementing the user interface and its functionality, developing the game's economic system, and adding various anti-cheat systems.",
        image1: "../media/photos/projects/frontpage-cloudwander.png",
        image2: "../media/photos/projects/image2-cloudwander.png",
        image3: "../media/photos/projects/image3-cloudwander.png",
        platform: ""
    },
    "rita-abuelita": {
        title: "Rita la Abuelita",
        date: "06/2024",
        description: "Rita la Abuelita is a top-down point-and-click game where the player controls Rita, an elderly woman whose goal is to cook for her grandchildren, who have just arrived in town for a visit.",
        about: "In a small Spanish village with only 50 inhabitants, Rita lives alone after the recent death of her husband, who used to be a chef and always took care of the cooking. Now she struggles with daily cooking tasks, while her neighbors try to help her. When her daughter and grandson visit, the child asks for a home-cooked meal, motivating Rita to slowly start learning how to cook.",
        role: "I mainly worked in programming, where I developed the core systems of the game, including the full implementation of the minigames, UI logic, cutscene integration, and player interactions such as Rita’s house and movement improvements. I built systems like a quiz manager with random question selection and lives, and a cooking minigame based on collision detection and dynamic object movement. While I also contributed to game design and created some pixel art assets, my primary focus was on implementing gameplay mechanics and interactive systems.",
        image1: "../media/photos/projects/frontpage-rita.png",
        image2: "../media/photos/projects/image2-rita.png",
        image3: "../media/photos/projects/image3-rita.png",
    },
    "gloria-noctis": {
        title: "Gloria Noctis",
        date: "06/2025",
        description: "It is a 3D third-person stealth game where the player must navigate through rooms without being detected while collecting tokens to progress. Once the final room is reached, the player repeats the levels with added debuffs. After completing all levels with all debuffs, the game ends. If the player is caught, they restart from the first level.",
        about: "The game is set around and inside a giant eye-like tower inhabited by monks who write and preserve books. The protagonist, Nu, tries to submit his book to the tower but is rejected and banned. Determined, he repeatedly climbs the tower until his work is finally accepted, symbolizing the acceptance of a thought after overcoming emotional resistance and rejection.",
        role: "My role in the project was the complete programming of the game. I implemented the player movement system and integrated all character animations to ensure smooth and responsive gameplay. I also developed the book collection mechanics and handled all UI systems, including interaction flow and in-game interface functionality. Overall, I was responsible for building and connecting the core gameplay and user experience systems.",
        image1: "../media/photos/projects/frontpage-gloria.jpg",
        image2: "../media/photos/projects/image2-gloria.png",
        image3: "../media/photos/projects/image3-gloria.png",  
    },
    "dolor-eterno": {
        title: "Dolor Eterno",
        date: "2025",
        description: "Descripción..."
  }
  };

  const project = projects[projectId];

  if (!project) {
    console.warn("Proyecto no encontrado:", projectId);
    return;
    }

  if (project) {
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-date").textContent = project.date;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-about").textContent = project.about;
    document.getElementById("project-my-role").textContent = project.role;
    document.getElementById("project-image1").src = project.image1;
    document.getElementById("project-image2").src = project.image2;
    document.getElementById("project-image3").src = project.image3;
  }

});

 const projectOrder = [
  "cloud-wander",
  "rita-abuelita",
  "gloria-noctis",
  "dolor-eterno"
];

function goToAdjacentProject(direction) {
  const params = new URLSearchParams(window.location.search);
  const currentId = params.get("id");

  const currentIndex = projectOrder.indexOf(currentId);
  if (currentIndex === -1) return;

  let nextIndex;

  if (direction === "next") {
    nextIndex = (currentIndex + 1) % projectOrder.length;
  } else {
    nextIndex = (currentIndex - 1 + projectOrder.length) % projectOrder.length;
  }

  const nextProjectId = projectOrder[nextIndex];

  window.location.href = `../project.html?id=${nextProjectId}`;
}