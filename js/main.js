const despliegaMenu = () => {
    document.querySelector(".menu").classList.toggle('visible')
}
document.getElementById('btn-burguer').addEventListener('click', despliegaMenu)