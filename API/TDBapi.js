const API_TOKEN ="ca995fce220e473346d9a3d653bc7745"

export function getFilmsFromApiUsingSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+API_TOKEN+'&language=fr&query='+text
    return fetch(url)
    .then(response=> response.json())
    .catch(error=>console.log(error))

}
export function getImageFromAPI(name){
    return 'https://image.tmdb.org/t/p/w500/'+name
}
export function getFilmsFromApiUsingSearchTextAndPage(text,page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+API_TOKEN
    +'&language=fr&query='+text+'&page='+page
    return fetch(url)
    .then(response=> response.json())
    .catch(error=>console.log(error))
}
export function getFilmsFromApiUsingIdFilm(idFilm){
    const url = 'https://api.themoviedb.org/3/movie/'+idFilm+'?api_key='+API_TOKEN
    return fetch(url)
    .then(response=> response.json())
    .catch(error=>console.log(error))
}