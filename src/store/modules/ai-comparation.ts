import axios from 'axios'

interface IResult {
  imageData: string
  gumiResult: string
  googleResult: string
  microsoftResult: string
}

const state: IResult = {
  imageData: '',
  gumiResult: 'No test was performed',
  googleResult: 'No test was performed',
  microsoftResult: 'No test was performed',
}

const microsoftApi = {
  url: 'https://eastasia.api.cognitive.microsoft.com/vision/v1.0/recognizeText',
  headers: {
    'Ocp-Apim-Subscription-Key': '98e6bb28308343b3b40e7ee5305a7170',
    'Content-Type': 'application/octet-stream',
  },
  params: {
    handwriting: true,
  },
}

const googleApi = {
  url:
    'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBOEtw2-t6uw4vvCkv8PsRWKdM91xfXvEg',
  requests: [
    {
      features: [
        {
          type: 'DOCUMENT_TEXT_DETECTION',
          // maxResults: 50,
        },
      ],
      imageContext: {
        languageHints: ['ja'],
      },
    },
  ],
}

const messages = [
  'I can not recognize any number in here!',
  'What is it? I do not think it is a number!',
  'Sorry but I do not understand the number you wrote.',
  'I do not think you wrote a number!',
  'I think I need study more for understanding your number style.',
  'Could you tell me what number you wrote? Because I can not recognize it.',
  'I feel very difficult when trying to recognize the number you wrote.',
]

const getRandomArrayElement = (array: string[]) => {
  const min: number = 0
  const max: number = array.length - 1
  const randIndex = Math.floor(Math.random() * (max - min)) + min
  return array[randIndex]
}

const getters = {
  result: (state: IResult) => state,
  imageData: (state: IResult) => state.imageData,
  gumiResult: (state: IResult) => state.gumiResult,
  googleResult: (state: IResult) => state.googleResult,
  microsoftResult: (state: IResult) => state.microsoftResult,
}

const actions = {
  async fetchGumiApi({ commit }: any, payload: any) {
    const rep = await axios.post('')
    commit('setGumiResult', rep.data)
  },
  async fetchGoogleApi({ commit }: any, payload: any) {
    const rep = await axios.get('')
    commit('setGoogleResult', rep.data)
  },
  async fetchMicrosoftApi({ commit }: any, payload: Blob) {
    try {
      const rep = await axios.post(microsoftApi.url, payload, {
        headers: microsoftApi.headers,
        params: microsoftApi.params,
      })
      if ((await rep.status) === 202) {
        let result: any = 0
        const operationUrl = await rep.headers['operation-location']
        const finalRep = await axios.get(operationUrl, {
          headers: microsoftApi.headers,
        })
        const analysis = await finalRep.data
        try {
          if (analysis.recognitionResult.lines > 0) {
            analysis.recognitionResult.lines.forEach((line: any) => {
              // tslint:disable-next-line: radix
              result = parseInt(line.Text[0])
              result = line.text[0]
            })
          } else {
            result = getRandomArrayElement(messages)
          }
        } catch (error) {
          result = getRandomArrayElement(messages)
        }
        commit('setMicrosoftResult', result)
      } else {
        commit('setMicrosoftResult', 'I cannot think right now!')
      }
    } catch (error) {
      commit('setMicrosoftResult', 'I cannot think right now!')
    }
  },
}

const mutations = {
  setImageData: (state: IResult, result: string) => (state.imageData = result),
  setGumiResult: (state: IResult, result: string) =>
    (state.gumiResult = result),
  setGoogleResult: (state: IResult, result: string) =>
    (state.googleResult = result),
  setMicrosoftResult: (state: IResult, result: any) =>
    (state.microsoftResult = result),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
