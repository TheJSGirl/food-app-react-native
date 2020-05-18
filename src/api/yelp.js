import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer to1YkTF4WD-uQImW_3E7OHgpy3tKLQ7j2y4twe5WlNqPumGT-wCb-NsNJU6lJIDOCjEJDQnotwFuKyhUpyiAtUSVYnXuNNoInGlNaca3SSIhFQBChlcjezh1pkTCXnYx'
    }
})