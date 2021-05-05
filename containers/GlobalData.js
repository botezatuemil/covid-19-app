import customData from '../dataGlobal.json'

var CovidData = []
var data = {}
var a, b, c ,d;

var len = Object.keys(customData).length
for (var i = 1; i < len; i++) {
    // data[id] = i + 1;
    // data[backgroundColor] = 'white';
    // data['textColor'] = 'black';

    if (i % 4 == 1) {
       a = customData[i];
    }

    if (i % 4 == 2) {
        b = customData[i];
    }

    if (i % 4 == 3) {
        c = customData[i];
    }

    if (i % 4 == 0) {
        d = customData[i];
    }
    if (i % 4 == 0) {
        CovidData.push({
            'id' : i,
            'backgroundColor': 'white',
            'country' : a,
            'cazuriTotale' : b,
            'decese' : c,
            'vindecati' : d,
        })
    }
}

    console.log(CovidData)
// const CovidGlobalData = [
//     {
//         id: 1,
//         backgroundColor: 'white',
//         country: customData[]
//     }
// ]

export default CovidData