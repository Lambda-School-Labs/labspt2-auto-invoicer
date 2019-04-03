import axios from 'axios'

//production
export const Post = query => {
  return axios.post('https://api.myautoinvoicer.com/graphql', query)
}

//local
// export const Post = query => {
//   return axios.post('http://localhost:5000/graphql', query)
// }

export const inputToString = input => {
  const data = [];
  for(let key in input) {
    data.push(`${key}: "${input[key]}"`)
  }
  input = data.join(", ");
  return input
}