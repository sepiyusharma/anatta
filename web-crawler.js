import https from 'https'
export default class WebCrawler {
    crawl = (url) => new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const { statusCode } = res;

            let error;
            // Any 2xx status code signals a successful response but
            // here we're only checking for 200.
            if (statusCode !== 200) {
                error = new Error('Request Failed.\n' +
                    `Status Code: ${statusCode}`);
            } 
            if (error) {
                reject(error);
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', ()=>resolve(rawData));
        }).on('error', reject);
    })
}