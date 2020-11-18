import './styles.css';
import OnFeatchImagesAPI from './js/api'
import markupImages from './components/card.hbs'
var debounce = require('lodash.debounce');
var InfiniteScroll = require('infinite-scroll')

const refs = {
    serchForm: document.querySelector(`#search-form`),
    gallery: document.querySelector(`.gallery`),
    btnLoadMore: document.querySelector(`#load-more`),
    
}
refs.serchForm.addEventListener(`input`, debounce(onSerchImages, 300))
refs.btnLoadMore.addEventListener(`click`, btnLoadMore )

const newsApiService = new OnFeatchImagesAPI();

function onSerchImages(e) { 
    e.preventDefault()
    newsApiService.searchImages = e.target.value
    newsApiService.resetPage();
    newsApiService.featchImages().then(appendImagesMarkup)
    clearImagesContainer()
   
}

 function btnLoadMore(e) {
    newsApiService.featchImages().then(appendImagesMarkup)
    scroll()
    

}
 function scroll() {
    const { y } = refs.gallery.lastElementChild.getBoundingClientRect()
  
    setTimeout(() => {
       window.scrollTo({
           top: y + 300,
           behavior: 'smooth'
       })
     }, 500);
      
}

function appendImagesMarkup(hits) {
     return  refs.gallery.insertAdjacentHTML(`beforeend`, markupImages(hits));  
}

 function clearImagesContainer() {
     refs.gallery.innerHTML = '';
 }

