import axios from 'axios'

const routes = {
    getData: {
        fromWeb() {
            return axios.get('/sayHi')
        },
        dataFromController() {
            return axios.get('/sayHiFromController')
        }
    }
}

export default routes;