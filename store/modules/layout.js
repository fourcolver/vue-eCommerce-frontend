import Config from '../../data/config.json'
const state = {
  layout: Config
}
// mutations
const mutations = {
  set: (state) => {
    state.layout.config.color = localStorage.getItem('color') || state.layout.config.color
    if (state.layout.config.color) {
      createStyle(state.layout.config.color)
    }
  },
  setLayoutType: (state, payload) => {
    if (payload === 'rtl') {
      document.body.classList.remove('ltr')
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
      document.body.classList.add('ltr')
    }
  },
  setColorScheme: (state, payload) => {
    state.layout.config.color = payload
    localStorage.setItem('color', state.layout.config.color)
    setColor(state, payload)
  },
  setLayoutVersion: (state, payload) => {
    document.body.classList.toggle('dark')
    state.layout.config.layout_version = 'dark'
  }
}
// actions
const actions = {
  set: (context) => {
    context.commit('set')
  },
  setColorScheme: (context, payload) => {
    context.commit('setColorScheme', payload)
  },
  setLayoutType: (context, payload) => {
    context.commit('setLayoutType', payload)
  },
  setLayoutVersion: (context, payload) => {
    context.commit('setLayoutVersion', payload)
  }
}

function createStyle(color) {
  const head = document.head
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = window.location.href + 'assets/css/' + color + '.css'
  head.appendChild(link)
}
function setColor(state, color) {
  createStyle(color)
  window.location.reload()
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
