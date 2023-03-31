module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/uploads")
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};