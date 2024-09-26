import axios from 'axios'
export const getCredentials =(async()=>{
  let config = {
    method :"get",
    url:"localhost:1337/api/secondadmins"
  }
  return axios.get(config)
})