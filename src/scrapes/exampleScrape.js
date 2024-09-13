import puppeteer from "puppeteer"

export async function getDataContent(){
    
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');


    try{
    
        await page.goto("https://pubmed.ncbi.nlm.nih.gov/",  { waitUntil: 'domcontentloaded' , timeout: 0});


        await page.waitForSelector('input[type= "search"]', {timeout: 5000})

        await page.type('input[type="search"]', "Hack Squat");

        await page.click(".search-btn");
        //await page.keyboard.press("Enter")

        await page.waitForSelector(".search-results", {timeout:5000, waitUntil: 'domcontentloaded'})
        await page.waitForSelector(".full-docsum", {timeout:3000, waitUntil: 'domcontentloaded'})

        const result = await page.evaluate(() =>{
            
            const data = document.querySelectorAll(".full-docsum");


            return Array.from(data).map( result => {
                const title = result.querySelector(".docsum-title").innerText;
                const author = result.querySelector(".docsum-authors").innerText;
                const journal = result.querySelector(".docsum-journal-citation").innerText;
                const pmid_article = result.querySelector(".docsum-pmid").innerText;
                const link_article = `https://pubmed.ncbi.nlm.nih.gov/${pmid_article}`;
                const summary = result.querySelector(".full-view-snippet").innerText;

                return {
                    title: title.trim(),
                    link_article,
                    author: author.trim(),
                    journal: journal.trim(),
                    pmid_article,
                    summary
                }


            });
            
    });

    console.log(result);
    //return result
    
    }catch(e){

        console.log("error al obtener data: ", e)

    }finally{
        
        await browser.close();
    
    }
    

    
}




getDataContent();