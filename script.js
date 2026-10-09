const skills = [
    ["html5", "HTML5", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
    ["fastapi", "FastAPI", "https://fastapi.tiangolo.com/"],
    ["csharp", "C#", "https://learn.microsoft.com/en-us/dotnet/csharp/"],
    ["javascript", "JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
    ["lua", "Lua", "https://www.lua.org/"],
    ["git", "Git", "https://git-scm.com/"],
    ["java", "Java", "https://www.oracle.com/java/"],
    ["python", "Python", "https://www.python.org/"],
    ["mysql", "MySQL", "https://www.mysql.com/"],
    ["postgresql", "PostgreSQL", "https://www.postgresql.org/"],
    ["docker", "Docker", "https://www.docker.com/"],
    ["blender", "Blender", "https://www.blender.org/"]
];

const skillsContainer = document.getElementById("skills-list");

const baseURL =
    "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/";

skills.forEach(([icon, name, link]) => {
    const a = document.createElement("a");

    a.href = link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = name;

    const img = document.createElement("img");

    img.src = `${baseURL}${icon}-colored.svg`;
    img.alt = name;
    img.loading = "lazy";

    a.appendChild(img);
    skillsContainer.appendChild(a);
});

const audio = document.getElementById("audio");
const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");

audio.volume = 0.05;

audio.loop = true;

function updateMusicIcon() {
    const isPlaying = !audio.paused;

    musicIcon.src = isPlaying ? "stop.png" : "go.png";

    musicBtn.setAttribute(
        "aria-label",
        isPlaying ? "Pause music" : "Play music"
    );
}

async function playMusic() {
    try {
        await audio.play();
    } catch (error) {
        console.warn("Автоплей заблокирвыан ошиька:", error);
        updateMusicIcon();
    }
}

musicBtn.addEventListener("click", () => {
    if (audio.paused) {
        playMusic();
    } else {
        audio.pause();
    }
});

audio.addEventListener("play", updateMusicIcon);
audio.addEventListener("pause", updateMusicIcon);

audio.addEventListener("error", () => {
    console.error("Не удалось закгруизить твоб муызкуу:", audio.error);
    updateMusicIcon();
});

playMusic();

updateMusicIcon();