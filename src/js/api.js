
// export default  {onFeatchImages} 

    
export default class OnFeatchImagesAPI{
   
    constructor() {
         
        this.searchImages = ''
        this.page = 1
    }
    featchImages() {
        
        const KEY = `9129335-d520ad64a87037f5fc5f30593`;
        const BASE_URL = `https://pixabay.com/api/`

        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchImages}&page=${this.page}&per_page=12&key=${KEY}`
        return fetch(url)
            .then(responce => responce.json())
            .then(responce => {
                this.incrementPage();
                return responce
            })
    }
    get images() {
    return this.searchImages;
  }

    set images(newImages) {
    this.searchImages = newImages;
    }
     incrementPage() {
    this.page += 1;
    }

     resetPage() {
    this.page = 1;
     }
}