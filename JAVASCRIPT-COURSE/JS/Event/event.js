// // Sự kiện trong Javscript
// /**
//  * 1. onclick
//  * 2. ondblclick
//  * 3. onmouseover
//  * 4. onmouseout
//  * 5. onkeydown
//  * 6. onkeyup
//  * 7. onblur
//  * 8. oncopy
//  * 9. oncut
//  * 10. onpaste
//  * 11. submit
//  * 12. focus
//  */
// các sự kiện form quan trọng: blur,focus,change, submit
//event.stopPropagation(); => Ngăn chặn sự kiện nổi bọt
//e.stopImmediatePropagation(); => Sử dụng được duy nhất sự kiện có thuộc tính 
// capture => ngược lại với sự kiện nổi bọt => Đi từ ngoài vào trong
// capture: true nằm trong object => .addEvent('click',handler, option)
// target => Khởi nguồn sự kiện
// current target => Lắng nghe sự kiện
// e.preventDefault => Ngăn chặn hành vi mặc định nào đó
// e.target.dataset.name => Lấy ra thuộc tính data custom, cách lấy khác với get Attribute
// const clickNode = document.querySelector('.btn--click');
// const h1Node = document.querySelector('h1');
// const inputNode = document.getElementById('onkeydown');
// const paraNode = document.querySelector('.para');
// const submitNode = document.getElementById('submit');
// const bodyNode = document.querySelector('body');

// // clickNode.addEventListener('click',(e)=>{
// //      console.log('Bạn vừa click chuột');
// //      console.log(e);
// // })

// // clickNode.addEventListener('dblclick',() => {
// //      console.log('Bạn vừa double click');
// // })


// // h1Node.addEventListener('mouseover',(e) => {
// //      console.log('Bạn vừa di chuột vào thẻ h1');
// //      console.log(e);
// // })

// // h1Node.addEventListener('mouseout',() => {
// //      alert('Bạn vừa di chuyển chuột ra ngoài thẻ h1');
// // })


// // inputNode.addEventListener('keydown', (e)=>{
// //      console.log(e.keyCode);
// // })

// // inputNode.addEventListener('blur',() => {
// //      console.log('Ban vua roi khoi o input');
// // })


// paraNode.addEventListener('copy', () => {
//      alert('Copy Success !');
// })

// paraNode.addEventListener('cut',() => {
//      alert('Cut Success !');
// })

// inputNode.addEventListener('paste', () => {
//      alert('Paste Success !');
// })


// inputNode.addEventListener('keydown', (e) => {
//      console.log(e.target);
// })



// window.addEventListener('scroll', () => {
//      console.log(pageYOffset);
// })



















// // const clickNode = document.querySelector('.btn--click');
// // console.log(clickNode);


// // addEventListener('keydown',(self)=>{
// //    let keyCodea = self.keyCode;
// //    if(keyCodea===13){
// //         clickNode.textContent = 'Ban vua nhan phim Enter';
// //    }
// //    else if(keyCodea === 65){
// //         clickNode.textContent = 'Ban vua nhan phim a';
// //    }
// // });


 
 var backClick = document.getElementById('myBtn');

 window.onscroll = () => {
       
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
          backClick.style.display = "block";
      else 
          backClick.style.display = "none";
      
 }
 
 //gán sự kiện click cho button
 backClick.addEventListener("click", function(){
     //Nếu button được click thì nhảy về đầu trang
     backClick.style.animation = 'test2 linear 0.7s';
     setTimeout(()=>{
          backClick.style.animation = 'test 2s linear';
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;     
      },700);
 });