export async function getList(id){
    const url = id ? `./pages/data/listData/${id}` : "./pages/data/listData";
    const res = await fetch(url)
    const data = await res.json()
    return data

}