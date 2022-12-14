const key = '8ffJV1j8NXhSFhfyqZxdXPcWBNB4anSJ'



export default function getGifs ( {keyword = 'pandas'} = {}) {
  console.log(keyword)
  const urls = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  return fetch(urls)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if (Array.isArray(data)) {
        const gifs = data.map(imagen => {
          const { images, title, id} = imagen
          const { url } = images.downsized_medium
          // console.log(url)
          return {title, id, url }
          // const url = imagen.images.downsized_medium.url
          // // console.log(url)
          // return url
        })
        return gifs
      }
    })
}