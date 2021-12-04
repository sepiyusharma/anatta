'test a test test a test. Test a test testing tests'.split('test')
export default class StringManipulator {
    getNumberOfOccurence(htmlContent = '', findWordOccurence) {
        let wordIterator = 0
        let numberOfOccurenceCounter = 0
        let mainHtmlIterator = 0
        const considerableSpecialCharacters = ['.', ',', "'", '"', ' ']
        while (mainHtmlIterator < htmlContent.length) {
            if (findWordOccurence[wordIterator] && htmlContent[mainHtmlIterator].toLocaleLowerCase() === findWordOccurence[wordIterator].toLocaleLowerCase()) {
                wordIterator++
            } else {
                wordIterator = 0
            }
            if (wordIterator === findWordOccurence.length && this.isMatchedWordNotSubString(htmlContent, mainHtmlIterator, considerableSpecialCharacters)) {
                numberOfOccurenceCounter++
            }
            mainHtmlIterator++;
        }
        return numberOfOccurenceCounter
        // return htmlContent.split('').filter(word => word.toLowerCase() === findWordOccurence.toLowerCase()).length || 0;
    }

    isMatchedWordNotSubString(htmlContent, mainHtmlIterator, considerableSpecialCharacters) {
        return (!htmlContent[mainHtmlIterator + 1] || considerableSpecialCharacters.includes(htmlContent[mainHtmlIterator + 1]))
    }
}


