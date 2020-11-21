import { SkynetClient } from 'skynet-js'

const client = new SkynetClient()

window.createPage = function (file) {
  

  
  try {
    (async () => {
      
      const skylink = await client.uploadFile(file)
      
	  
      const directLink = '/' + skylink.replace('sia:', '') + '/'
      document.getElementById('lnk').href = directLink
      document.getElementById('lnk').text = skylink
    })()
  } catch (error) {
    alert(error)
  }
}
