// ClientY: Chỉ tính theo viewport
// PageY: Tính theo cả document khi có scrool
//getBoudingClientRect(); => left, top, width, height

window.addEventListener('load', () => {
    const links = [...document.querySelectorAll('.nav-item')];
    const menu = document.querySelector('.nav-list');
    menu.addEventListener('mouseleave', () => {
        line.style.width = 0;
    });
    links.forEach((self) => {
        self.addEventListener('mouseover', handleHoverLink);
    });
    var line = document.createElement('div');
    document.body.appendChild(line);
    line.setAttribute('class','line-effect');
    function handleHoverLink(e){
        const {left, top, width, height} = e.target.getBoundingClientRect();
        console.log({left, top, width, height});
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top}px`;
        line.style.height = `${height}px`;
    }
});




