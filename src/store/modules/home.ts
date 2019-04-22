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

const getters = {
  result: (state: IResult) => state,
  imageData: (state: IResult) => state.imageData,
  gumiResult: (state: IResult) => state.gumiResult,
  googleResult: (state: IResult) => state.googleResult,
  microsoftResult: (state: IResult) => state.microsoftResult,
}

const actions = {
  async fetchGumiApi({ commit }: any, payload: string) {
    const rep = await axios.get('')
    commit('setGumiResult', rep.data)
  },
  async fetchGoogleApi({ commit }: any, payload: string) {
    const rep = await axios.get('')
    commit('setGoogleResult', rep.data)
  },
  async fetchMicrosoftApi({ commit }: any, payload: string) {
    const rep = await axios.get('')
    commit('setMicrosoftResult', rep.data)
  },
}

const mutations = {
  setImageData: (state: IResult, result: string) => (state.imageData = result),
  setGumiResult: (state: IResult, result: string) =>
    (state.gumiResult = 'Called'),
  setGoogleResult: (state: IResult, result: string) =>
    (state.googleResult = 'Called'),
  setMicrosoftResult: (state: IResult, result: string) =>
    (state.microsoftResult = 'Called'),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
