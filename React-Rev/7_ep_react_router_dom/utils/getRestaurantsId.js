import mockData from './mockResponses.json' with { type: 'json' };

console.log( Object.keys(mockData))

let resIdArray = []

for(let pages in mockData){

    let idsArray = mockData[pages].data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(res=>res.info.id)
    resIdArray = [...resIdArray,...idsArray]

}
    
console.log(resIdArray)

