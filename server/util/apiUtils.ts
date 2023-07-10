/**
 * json 데이터에서 해당 키값 리스트 반환
 * @param {ApiData} data 
 * @param {FindKey} key 
 * @returns list
 */
async function jsonPasingData (data: { [x: string]: { [x: string]: any; }; }, key: string){
    let array = Object.keys(data);
    let list = [];
    for(let i in array){
       //console.log(data[i][key]);
       list.push(data[i][key]);
    }
    return list;
}

/**
 * API json 데이터 받아오기
 * @param {Url} url 
 * @returns list
 */
export async function getDataFromData(url : string){
    const allCoinRes = await fetch('https://api.coinpaprika.com/v1/coins',
        {
            method: 'GET',
        });
    const urlCoinRes = await fetch(url,
        {
            method: 'GET',
        });
    const data = await allCoinRes.json();
    const data2 = jsonPasingData(await urlCoinRes.json(),"symbol");
    const data3 = (await data2).filter((data) => data.includes("USDT")).map(item => item.replace('USDT',''));
    console.log(data)
    return allCoinRes;
}