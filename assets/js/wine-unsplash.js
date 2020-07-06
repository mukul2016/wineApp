let photoUrls = []
let winePhotos

let imgIdEle2 = document.querySelector('#imgId2')
let imgIdEle3 = document.querySelector('#imgId3')
let imgIdEle4 = document.querySelector('#imgId4')
let imgIdEle5 = document.querySelector('#imgId5')

function getWinePhotos () {
  let imgIdEle1 = document.querySelector('#imgId1')
  fetch(
    'https://api.unsplash.com/search/photos?query=wine&' +
      'client_id=BSXJED6UhyH4DSPVkqo8B2ThVz-Hyq083g1E7AhrR1k'
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      console.log(response)
      winePhotos = response.results
      winePhotos.forEach(photo => {
        photoUrls.push(photo.urls.regular)
      })
    })
  console.log(photoUrls) //For test only
  //   imgIdEle1.src = photoUrls[0]
  imgIdEle1.setAttribute('src', photoUrls[0])
}
getWinePhotos()
