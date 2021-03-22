class Service {
    constructor() {
        this.baseUrl = 'https://api.backendless.com/F6749AD6-5CBE-9455-FFF3-DD1F7DDAF500/2E57EE2C-17C4-41FD-942E-148630751401';
    }

    getAllProducts = () => {
        return fetch(this.baseUrl + '/data/products')
            .then(data => data.json())
            .catch(err => console.log(err));
    }

    getProductById = (id) => {
        return fetch(this.baseUrl + `/data/products/${id}`)
            .then(data => data.json())
            .catch(err => console.log(err));
    }
}

export default Service;