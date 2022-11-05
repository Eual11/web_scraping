const axios = require("axios");
let url = process.argv[2];
if(!url)
{
    throw "no url given";
}
let eu = axios.get(url,{headers:{'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-G980F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.96 Mobile Safari/537.36'}});
eu.then(({data})=>console.log(data));
