var places = [{
    id: 1,
    name: 'Ramat Gan',
    lat: 32.0805556,
    lng: 34.8141667,
    tags: ['study']
},{
    id: 2,
    name: 'Katzrin',
    lat: 32.992,
    lng: 35.691,
    tags: ['fun']
},{
    id: 3,
    name: 'Haifa',
    lat: 32.794044,
    lng: 34.989571,
    tags: ['work']
}];

function getPlaces() {
    return places;
}

export default {
    getPlaces
}

