const parallax = document.getElementById('parallax');  

window.addEventListener('mousemove', (e) => {  
    const { clientX, clientY } = e;  
    const xPos = clientX / window.innerWidth; // Нормализуем координаты  
    const yPos = clientY / window.innerHeight;  
    
    // Поворачиваем элемент на основе положения мыши  
    const tiltX = (yPos - 0.5) * 30; // Углы поворота  
    const tiltY = (xPos - 0.5) * 30;  

    parallax.style.transform = `rotateX(${tiltX}deg) rotateY(${-tiltY}deg)`;  
});  