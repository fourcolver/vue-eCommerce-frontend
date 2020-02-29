import blog from '../../data/blog'

const state = {
  blog: blog.data,
  bloglist: blog.data
}
// getters
const getters = {
  getblogTag: (state) => {
    const uniqueTag = []
    const blogTag = []
    state.bloglist.map((blog, index) => {
      if (blog.tags) {
        blog.tags.map((tag) => {
          const index = uniqueTag.indexOf(tag)
          if (index === -1) uniqueTag.push(tag)
        })
      }
    })
    for (let i = 0; i < uniqueTag.length; i++) {
      blogTag.push(uniqueTag[i])
    }
    return blogTag
  }
}
// mutations
const mutations = {
}
// actions
const actions = {
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
