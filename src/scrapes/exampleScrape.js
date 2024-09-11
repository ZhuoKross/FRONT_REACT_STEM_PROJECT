import puppeteer from "puppeteer"

const getDataWebPage = async () =>{
    
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 500
    });
    const page = await browser.newPage();



    try{
    
        await page.goto("https://example.com");
        const result = await page.evaluate(() =>{
            
            const title = document.querySelector("h1").innerText;
            const content = document.querySelector("p").innerText;
            const more = document.querySelector("a").href;

            return {
                title,
                content,
                more
            }

    });

    console.log(result);
    
    }catch(e){

        console.log("error al obtener data: ", e)

    }finally{
        
        await browser.close();
    
    }
    


    
}


getDataWebPage();