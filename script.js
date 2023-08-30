const RANDOM_QUOTE_QUOTABLE_API = 'https://api.quotable.io/random'

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_QUOTABLE_API)
            .then(resposne => resposne.json())
            .then(data => data.content)
}


async function getNextCode(){
    const quote = await getRandomQuote();
    console.log(quote)
}

getNextCode()
