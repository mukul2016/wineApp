let photoUrls = []
var winePhotos
var imgIdEle1 = document.querySelector('#imgId1')
var imgIdEle2 = document.querySelector('#imgId2')
var imgIdEle3 = document.querySelector('#imgId3')
var imgIdEle4 = document.querySelector('#imgId4')
var imgIdEle5 = document.querySelector('#imgId5')

function updatePhotoIds (pUrls) {}

function getWinePhotos () {
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
}
getWinePhotos()
// updatePhotoIds()
