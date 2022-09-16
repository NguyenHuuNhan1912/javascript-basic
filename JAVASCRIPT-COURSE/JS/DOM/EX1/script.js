// Button Node 
const $ = document.querySelector.bind(document);

const btnFeNode = $('.btn--fe');
const btnBeNode = $('.btn--be');
const btnToolNode = $('.btn--tool');
const clickDarkNode = $('.btn-click');
const bodyNode = $('body');


// Parent Node - ul(nav-list-)
const parentFeNode = $('.nav-list-fe');
const parentBeNode = $('.nav-list-be');
const parentToolNode = $('.nav-list-tool');

// Array Button Node and Array Parent Node 
var arrButtonNode = [btnFeNode,btnBeNode,btnToolNode];
var arrParentNode = [parentFeNode,parentBeNode,parentToolNode];


// Array data
const frontendWeb = ['HTML','CSS','Javascript','SASS','Bootstrap','Jquery','Tailwind CSS'];
const backendWeb = ['PHP','Java','Python','C++','C','C#','MySQL'];
const tool = ['Visual Studio Code','Elcipse','DEV C/C++','Sublime Text','Github'];

// Render data in HTML
var renderData = (dataType,str,parentNode) => {
    dataType.forEach((self)=>{
        let liNode = document.createElement('li');
        liNode.classList.add(`nav-item-${str}`);
        liNode.textContent = self;
        parentNode.appendChild(liNode);
    });
}

// Call function render
renderData(frontendWeb,'fe',parentFeNode);
renderData(backendWeb,'be',parentBeNode);
renderData(tool,'tool',parentToolNode);

//Add class hide
arrParentNode.forEach((self) => {
    self.classList.add('hide');
})


// Event Onclick show data
// var showData = (btnNode,parentNode) => {
//     btnNode.onclick = () => {
//         parentNode.classList.toggle('show');
//     }
// }
var showData = (btnNode, parentNode) => {
    btnNode.onclick = (e) => {
        var btnList = document.querySelectorAll('.content > ul');
        parentNode.classList.toggle('hide');
        const result = Array.from(btnList).filter((item) => {
            return item !== e.target.nextElementSibling;
        });
        // Nếu click 1 thì trả về 2 3
        result.forEach((item) => {
            item.classList.add('hide');
        })
    };
};
// Call function showData
showData(btnFeNode,parentFeNode);
showData(btnBeNode,parentBeNode);
showData(btnToolNode,parentToolNode);


var darkMode = () => {
    clickDarkNode.onclick = () =>{
        bodyNode.classList.toggle('dark-mode');
        arrParentNode.forEach((self)=>{
            self.classList.toggle('change-dark');
        })
    }
}
darkMode();