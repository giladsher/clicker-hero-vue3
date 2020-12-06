module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line quotes
        prependData: `@import "@/styles/_vars.scss";\n@import "@/styles/_mixins.scss";\n@import "@/styles/_utils.scss";`
      }
    }
  }
}