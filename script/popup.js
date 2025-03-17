// // Проверяем, если пользователь зашел на сайт впервые
// window.onload = function() {
//     if (!localStorage.getItem('visited')) {
//       // Показываем попап
//       document.getElementById('popup').style.display = 'flex';
      
//       // Отметим, что пользователь был на сайте
//       localStorage.setItem('visited', 'true');
//     }
//   };
  
//   // Закрытие попапа по клику на крестик
//   function closePopup() {
//     document.getElementById('popup').style.display = 'none';
//   }
  
//   // Закрытие попапа по клику вне попапа
//   window.onclick = function(event) {
//     if (event.target == document.getElementById('popup')) {
//       closePopup();
//     }
//   }
  