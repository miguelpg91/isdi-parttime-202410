const places = []; // Array que simula una base de datos

export function addPlace(name, description, lat, lng) {
    const place = { id: places.length + 1, name, description, location: { lat, lng } };
    places.push(place);
    return place;
}

export function getPlaces() {
    return places;
}