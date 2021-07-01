export default function getBestPostcode(postcodes, highlightedPostcodes) {
  const defaultValue = highlightedPostcodes[0].value
  const bestAttributes = []

  highlightedPostcodes.forEach((value, index) => {
    if (index > 0 && value.matchLevel !== 'none') {
      bestAttributes.push({
        index: index,
        words: value.matchedWords
      })
    }
  })

  if (bestAttributes.length === 0) {
    return { postcode: postcodes[0], highlightedPostcode: defaultValue }
  }

  bestAttributes.sort((a, b) => {
    if (a.words > b.words) {
      return -1
    } else if (a.words < b.words) {
      return 1
    }
    return a.index - b.index
  })

  const postcode = postcodes[bestAttributes[0].index]

  return {
    postcode,
    highlightedPostcode: highlightedPostcodes[bestAttributes[0].index].value
  }
}
