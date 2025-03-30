export async function fetchPlaces() {
    const response = await fetch("/api/places");
    return response.json();
}

export async function savePlace(place) {
    const response = await fetch("/api/places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(place),
    });
    return response.json();
}