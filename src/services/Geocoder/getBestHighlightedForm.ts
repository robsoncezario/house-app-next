export default function getBestHighlightedForm(highlightedValues: Array<any>) {
  const defaultValue = highlightedValues[0].value
  const bestAttributes = []

  highlightedValues.forEach((value, index) => {
    if (index > 0 && value.matchLevel !== 'none') {
      bestAttributes.push({
        index: index,
        words: value.matchedWords
      })
    }
  })

  if (bestAttributes.length === 0) {
    return defaultValue
  }

  bestAttributes.sort((a, b) => {
    if (a.words > b.words) {
      return -1
    } else if (a.words < b.words) {
      return 1
    }
    return a.index - b.index
  })

  return bestAttributes[0].index === 0
    ? `${defaultValue} (${highlightedValues[bestAttributes[1].index].value})`
    : `${highlightedValues[bestAttributes[0].index].value} (${defaultValue})`
}
