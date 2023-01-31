// menu toggler
let toggler = document.querySelector('.menu-toggle');
let menu = document.querySelector('.nav-bar .menu');

toggler.addEventListener('click', e => {
  toggler.classList.toggle('close');
  toggler.classList.toggle('open')
  e.stopPropagation();
  if (menu.classList.contains('block')) {
    menu.classList.remove('correct');
    setTimeout(() => {
      menu.classList.remove('vis-up');
    })
    setTimeout(() => {
      menu.classList.remove('block');
    }, 300)
  } else {
    menu.classList.add('block');
    setTimeout(() => {
      menu.classList.add('vis-up');
    });
    setTimeout(() => {
      menu.classList.add('correct');
    }, 300)
  }
})
menu.addEventListener('click', e => {
  e.stopPropagation();
})
document.addEventListener('click', e => {
  if (e.target !== toggler || e.target !== menu) {
    if (menu.classList.contains('block')) {
      menu.classList.remove('correct');
      toggler.classList.toggle('close');
      toggler.classList.toggle('open')
      setTimeout(() => {
        menu.classList.remove('vis-up');
      })
      setTimeout(() => {
        menu.classList.remove('block');
      }, 300)
    }
  }
});


// initiate typing
let typing = document.querySelector('.typing');
let sentences = [`a developer.`, `a photographer.`, `a UI designer.`, `a designer.`];
var i = 0;
setTimeout(() => {
  calculate();
  typing.classList.add('active');
  setTimeout(() => {
    setInterval(() => {
      if (i === sentences.length) {
        i = 0;
      }
      typing.innerHTML = sentences[i];
      calculate();
      i++;
    }, 2000);
  }, 100)
}, 1000)

function calculate() {
  typing.style.width = `fit-content`;
  document.documentElement.style.setProperty('--h2-w', `${typing.scrollWidth +5}px`);
  typing.style.width = `${typing.scrollWidth}px`;
}

// add shadow to nav bar
let nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', e => {
  if (window.scrollY > 0) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
});

// smooth appeared of heading
let head = document.querySelector('.main-heading');
let sections = ["features", "portfolio", "resume", "testimonials", "clients", "pricing", "blog", "contact"]
for (var j = 0; j < sections.length; j++) {
  let sec = document.querySelector(`.${sections[j]}`);
  window.addEventListener('scroll', () => {
    // sections
    whenReach(sec);
  });
}
function whenReach(section) {
  let scrolled = this.scrollY;
  let windowHeight = this.innerHeight;
  let sectionTop = section.offsetTop;
  if (scrolled > sectionTop - windowHeight/ 1.5) {
    !section.classList.contains('active')? section.classList.toggle('active'): "";
  }
}
let boxes = [".features .box", ".portfolio .box", "testimonials", "clients", "pricing", "blog", "contact"]

for (var j = 0; j < boxes.length; j++) {
  let boxe = document.querySelectorAll(`${boxes[j]}`);
  window.addEventListener('scroll', () => {
    // sections
    boxe.forEach(box => {
      whenReach(box);
    })
  });
}

let proskillscont = document.querySelector('.pro-skills-cont');

window.addEventListener('scroll', () => {
  // sections
  let scrolled = this.scrollY;
  let windowHeight = this.innerHeight;
  let proskillscontTop = proskillscont.offsetTop;
  if (scrolled > proskillscontTop - windowHeight / 1.5) {
    proskillscont.classList.contains('active') ? proskillscont.classList.remove('active') : "";
  }
});
