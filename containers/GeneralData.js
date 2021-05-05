import customData from '../data.json';

const CovidGeneralData = [
    {
      id: 1,
      //color: 'white',
      backgroundColor: '#FFFFFF',
      description: 'Cazuri confirmate',
      textColor: 'black',
      numberCases: customData[1],
    },
    {
      id: 2,
      //color: 'white',
      backgroundColor: '#293077',
      description: 'Vindecați',
      textColor: 'white',
      numberCases: customData[2],
    },
    {
      id: 3,
      //color: 'white',
      backgroundColor: '#FFFFFF',
      description: 'Decedați',
      textColor: 'black',
      numberCases: customData[3],
    },
    {
      id: 4,
      //color: 'white',
      backgroundColor: '#293077',
      description: 'Doze de vaccin administrate',
      textColor: 'white',
      numberCases: customData[4],
    },
    {
      id: 5,
      //color: 'white',
      backgroundColor: '#FFFFFF',
      description: 'Imunizați',
      textColor: 'black',
      numberCases: customData[5],
    },
]

export default CovidGeneralData