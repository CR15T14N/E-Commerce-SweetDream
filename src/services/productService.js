export const getData = async(endpoint) => {
    const res = await fetch('https://fakestoreapi.com/' + endpoint);
    if (!res.ok) throw new Error ("Response not ok")
    const data = await res.json();
    return data;
}