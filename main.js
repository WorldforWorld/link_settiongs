document.addEventListener('DOMContentLoaded', function () { 

  const img = document.querySelector('.grid-img');
  const modal = document.querySelector('.modal');
  
  img.addEventListener('mouseenter', function () { 

    modal.innerHTML = '<img src="' + this.getAttribute('src') + '" alt="image">';
    const imgWidth = modal.clientWidth;
    let c = this.getBoundingClientRect();
    let result = c.left - imgWidth + img.clientWidth;
    let iffes = c.left + imgWidth;
    
    if (iffes >= window.outerWidth ) {
      modal.style.left = result + 'px';
    } else  {
      modal.style.left = c.left + 'px';
    }
    if (result <= 0) {
      modal.style.left = 15 + 'px';
    }

    modal.style.top = c.top + img.clientHeight + 'px';
    modal.classList.add('hover-js');
  });  

  img.addEventListener('mouseleave', function () { 
    modal.classList.remove('hover-js');
    modal.innerHTML = '';
  });
  
});