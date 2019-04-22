import axios from 'axios'

interface IResult {
  gumiResult: string
  googleResult: string
  microsoftResult: string
}

const state: IResult = {
  gumiResult: 'No test was performed',
  googleResult: 'No test was performed',
  microsoftResult: 'No test was performed',
}

const getters = {
  result: (state: IResult) => state,
  gumiResult: (state: IResult) => state.gumiResult,
  googleResult: (state: IResult) => state.googleResult,
  microsoftResult: (state: IResult) => state.microsoftResult,
}

const actions = {
  async fetchGumiApi({ commit }: any, payload: object) {
    const rep = await axios.get('')
    commit('setGumiResult', rep.data)
  },
  async fetchGoogleApi({ commit }: any, payload: object) {
    const rep = await axios.get('')
    commit('setGoogleResult', rep.data)
  },
  async fetchMicrosoftApi({ commit }: any, payload: object) {
    const rep = await axios.get('')
    commit('setMicrosoftResult', rep.data)
  },
}

const mutations = {
  setGumiResult: (state: IResult, result: string) =>
    (state.gumiResult = result),
  setGoogleResult: (state: IResult, result: string) =>
    (state.googleResult = result),
  setMicrosoftResult: (state: IResult, result: string) =>
    (state.microsoftResult = result),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
