const imagenes = document.querySelectorAll(".imagenes img");
const imagenMostrada = document.querySelector(".imagen-mostrada img");
const colores = document.querySelectorAll(".colores span");
const tallas = document.querySelectorAll(".tallas .talla");

colores.forEach(color => {
        color.addEventListener("click", () => {
                const id = color.getAttribute("id")
                imagenMostrada.setAttribute("src", `/img/${id}.webp`)
        })
})

const eliminarActive = () => {
        tallas.forEach(talla => {
                talla.classList.remove("active")
        })
}

tallas.forEach(talla => {
        talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add("active")
        })
})

imagenes.forEach(img => {
        img.addEventListener("click", (e)=> {
                const rutaImagen = e.target.src;
                imagenMostrada.setAttribute("src", rutaImagen)
        })
})

const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return { remainTime, remainSeconds, remainMinutes, remainHours, remainDays };
};

const countdown = (deadline, elem, finalMessage) => {

    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {

        let t = getRemainTime(deadline);

        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

    }, 1000);

};

countdown('Jul 06 2022 17:00:00 GMT-0600', 'clock', 'Feliz Fin Semestre')