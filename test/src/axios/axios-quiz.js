import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-bff57.firebaseio.com/'
})