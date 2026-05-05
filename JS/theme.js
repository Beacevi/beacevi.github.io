document.addEventListener("DOMContentLoaded", () => {

  /* ================== DARK MODE SWITCH ================== */
  const toggle = document.querySelector(".switch-button__checkbox");

  if (toggle) {
    // Cargar tema guardado
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }


  /* ================== WORK SECTIONS ================== */
  const sections = document.querySelectorAll('#my-work > div');
  const container = document.querySelector('#my-work');

  sections.forEach(section => {
    const button = section.querySelector('button');

    button.addEventListener('click', () => {

      const isActive = section.classList.contains('active');

      // 🔁 SI YA ESTÁ ACTIVO → RESETEAR TODO
      if (isActive) {
        sections.forEach(s => {
          s.classList.remove('active', 'inactive');
        });

        // Volver al orden original (opcional pero recomendado)
        sections.forEach(s => container.appendChild(s));

        return;
      }

      // 🚀 ACTIVAR UNO NUEVO
      sections.forEach(s => {
        s.classList.remove('active');
        s.classList.add('inactive');
      });

      section.classList.add('active');
      section.classList.remove('inactive');

      // Mover el activo arriba
      container.prepend(section);
    });
  });

});

/* ================== NAVIGATION ================== */
function goToHome() 
{
    window.location.href = "../index.html";
}
function goToWork() 
{
    window.location.href = "../work.html";
}
function AboutMe() 
{
    window.location.href = "../aboutme.html";
}
function goToProject(projectId) 
{
   window.location.href = `../project.html?id=${projectId}`;
}

