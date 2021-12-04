import StringManipulator from './string-manipulator.js'
import WebCrawler from './web-crawler.js'
import commandLineArgs from 'command-line-args'

const optionDefinitions = [
    { name: 'url', type: String },
    { name: 'words', type: String}
  ]
const options = commandLineArgs(optionDefinitions)
const webCrawler = new WebCrawler();
const stringManipulatorInstance = new StringManipulator();
const url = options.url
const words = options.words

async function countNumberOfOccuringWords (htmlContent) {
    words.split(',').forEach(word => {
        console.log(`${word}: ${stringManipulatorInstance.getNumberOfOccurence(htmlContent,word)}`)
    })
} 

webCrawler.crawl(url).then(countNumberOfOccuringWords).catch(err=>{
    console.log(err);
})

