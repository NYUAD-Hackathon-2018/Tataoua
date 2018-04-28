
from bs4 import BeautifulSoup
import wget
from pyppeteer import launch
import asyncio 


# <p class="searchitem_desc ellipsis_vert">

# filename = wget.download("https://www.volunteermatch.org/search/index.jsp#k=&v=false&s=1&o=distanceBand&l=United+States&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=")
async def main():
    for k in range(1,200):
        browser = await launch()
        page = await browser.newPage()
        await page.goto("https://www.volunteermatch.org/search/?aff=&amp;includeOnGoing=true&amp;r=country&amp;l=United+States&amp;o=distanceBand&amp;s="+str(k)+"1%20search_pages#k=&v=false&s="+str(k)+"1&o=distanceBand&l=New+York%2C+NY%2C+USA&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=")
        await page.waitFor(2000)
        html = await page.content()
        # filename = wget.download("https://www.volunteermatch.org/search/?aff=&amp;includeOnGoing=true&amp;r=country&amp;l=United+States&amp;o=distanceBand&amp;s="+str(k)+"1%20search_pages#k=&v=false&s="+str(k)+"1&o=distanceBand&l=New+York%2C+NY%2C+USA&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=")
        print("https://www.volunteermatch.org/search/?aff=&amp;includeOnGoing=true&amp;r=country&amp;l=United+States&amp;o=distanceBand&amp;s="+str(k)+"1%20search_pages#k=&v=false&s="+str(k)+"1&o=distanceBand&l=New+York%2C+NY%2C+USA&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=")

        soup = BeautifulSoup(html, 'html.parser')  
        for i in soup.findAll("a", {"link_type":"opp"}):
            filename = wget.download("https://www.volunteermatch.org"+i['href'], "files")
            with open(filename) as innerFile:
                text = i.text
                soup2 = BeautifulSoup(innerFile, 'html.parser')
                tags = []
                for j in soup2.findAll("img", {"class":"sprite_profile"}):
                    print(j['title'])
                    tags.append(j['title'])
                outputFile = open("output.txt", "a")
                for i in tags:
                    outputFile.write("__label__"+i.replace(" ","")+" ")
                outputFile.write(text+"\n")
                outputFile.close()



asyncio.get_event_loop().run_until_complete(main())



# https://www.volunteermatch.org/search/?aff=&amp;includeOnGoing=true&amp;r=country&amp;l=United+States&amp;o=distanceBand&amp;s=21%20search_pages#k=&v=false&s=31&o=distanceBand&l=New+York%2C+NY%2C+USA&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=

# https://www.volunteermatch.org/search/?aff=&amp;includeOnGoing=true&amp;r=country&amp;l=United+States&amp;o=distanceBand&amp;s=21%20search_pages#k=&v=false&s=21&o=distanceBand&l=New+York%2C+NY%2C+USA&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=

# https://www.volunteermatch.org/search/?aff=&amp;includeOnGoing=true&amp;r=country&amp;l=United+States&amp;o=distanceBand&amp;s=21%20search_pages#k=&v=false&s=11&o=distanceBand&l=New+York%2C+NY%2C+USA&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=

# https://www.volunteermatch.org/search/?aff=&amp;includeOnGoing=true&amp;r=country&amp;l=United+States&amp;o=distanceBand&amp;s=11 search_pages

# original : https://www.volunteermatch.org/search/index.jsp#k=&v=false&s=1&o=distanceBand&l=United+States&r=20&sk=&specialGroupsData.groupSize=&na=&partner=&usafc=