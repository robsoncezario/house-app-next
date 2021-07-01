export default function getBestHighlightedForm(highlightedValues) {
    const defaultValue = highlightedValues[0].value;
    const bestAttributes = [];

    for (let i = 1; i < highlightedValues.length; ++i) {
      if (highlightedValues[i].matchLevel !== 'none') {
        bestAttributes.push({
          index: i,
          words: highlightedValues[i].matchedWords,
        });
      }
    }

    if (bestAttributes.length === 0) {
      return defaultValue;
    }

    bestAttributes.sort((a, b) => {
      if (a.words > b.words) {
        return -1;
      } else if (a.words < b.words) {
        return 1;
      }
      return a.index - b.index;
    });

    return bestAttributes[0].index === 0
        ? `${defaultValue} (${highlightedValues[bestAttributes[1].index].value})`
        : `${highlightedValues[bestAttributes[0].index].value} (${defaultValue})`;
  }
  