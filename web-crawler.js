import Crawler from 'crawler'
export default class WebCrawler {
    crawl = (url) => {
        return new Promise((resolve,reject)=>{
            const crawler = new Crawler();
            crawler.direct({
                uri: url,
                callback: function (err,resp) {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(resp.body)
                    }
                }
            });
        })
    }
}