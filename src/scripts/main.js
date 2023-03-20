document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const trailerButton = document.querySelector('.btn-trailer');
  const closeButton = document.querySelector('.modal__content__close')
  const modal = document.querySelector('.modal');

  closeButton.addEventListener('click', () => {
    modal.classList.remove('modal--is-active');
  })

  trailerButton.addEventListener('click', () => {
    modal.classList.add('modal--is-active');
  });

  buttons.forEach(button => {
    button.addEventListener("click", (btn) => {
    const targetTab = btn.target.dataset.tabButton;
    const tab = document.querySelector(`[data-tab-id=${targetTab}]`)

    hideAllTabs();
    showTabs(tab)
    removeActiveButton();
    activeButton(btn);
    
  
    }) 

  })

});

const removeActiveButton  = () => {
  const buttons = document.querySelectorAll('[data-tab-button]');

  buttons.forEach(button => {
    button.classList.remove('about-avengers__tabs__button--is-active')
  })
}

const activeButton = (btn) => {
  btn.target.classList.add('about-avengers__tabs__button--is-active')
}

const hideAllTabs = () => {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');
  tabsContainer.forEach(tab =>{
    tab.classList.remove('about-avengers__list--is-active')
  })
}

const showTabs = (tab) => tab.classList.add('about-avengers__list--is-active')