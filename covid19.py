from bs4 import BeautifulSoup
import requests, lxml, html5lib, feedparser, re
import time
import smtplib
import datetime
import json

def format_cazuri_judet(articles):
    count = 0

    for post in articles:
        if count % 5 == 0:
            print('\n')
        print(post, end=' ')
        count += 1


class gsp():
    def cazuri_totale(self):
        articles = []
        numberPosts = 10
        post_curr = 0

        URL = 'https://www.gsp.ro/gsp-special/diverse/coronavirus-ultima-ora-stirile-zilei-despre-pandemia-de-coronavirus-raport-romania-covid-19-626084.html'      
        source = requests.get(URL).text
        soup = BeautifulSoup(source, 'lxml')

        for article in soup.find_all('li'):
            if post_curr < numberPosts:
                try:
                    #print(article)

                    summary = article.strong.text

                    articles.append([summary])
                except:
                    continue
                post_curr += 1
            else:
                break

        return articles


class datelazi():
    def cazuri_pe_tara(self):
        
        articles = []
        URL = 'https://datelazi.ro/'
        source = requests.get(URL).text
        soup = BeautifulSoup(source, 'html.parser')

        for article in soup.find_all('div', class_='column is-one-third'):
            try:
                numbers = article.h3.text
                articles.append(str(numbers))
            except:
                continue
        return articles

    def incidenta_judet(self):

        month = {
            '1' : 'ianuarie',
            '2' : 'februarie',
            '3' : 'martie',
            '4' : 'aprilie',
            '5' : 'mai',
            '6' : 'iunie',
            '7' : 'iulie',
            '8' : 'august',
            '9' : 'septembrie',
            '10' : 'octombrie',
            '11' : 'noiembrie',
            '12' : 'decembrie'
        }
        
        d = datetime.date.today()
        articles = []     
        URL = 'https://stirioficiale.ro/informatii/buletin-de-presa-' + str(d.day) + '-' + str(month[str(d.month)]) + '-2021-ora-13-00'
        source = requests.get(URL).text
        soup = BeautifulSoup(source, 'html.parser')
        index = 0

        for article in soup.find_all('td'):
            if index % 5 == 4 and index > 4:
                try:
                    numbers = article.p.text
                    articles.append(str(numbers))
                except:
                    continue
            index += 1

            if (index > 215):
                break

        return articles

class trt_net():
    def cazuri_global(self):

        articles = []
        URL = 'https://www.trt.net.tr/romana/covid19'
        source = requests.get(URL).text
        soup = BeautifulSoup(source, 'html.parser')
        index = 0

        for article in soup.find_all('td'):
            if index % 5 != 4:
                try:
                    crt = article.text
                    if crt == 30:
                        break
                    articles.append(str(crt))     
                except:
                    continue
            
            if (index > 148):
                break

            index += 1
            
        return articles

class my_dictionary(dict):
    def __ini__(self):
        self = dict()

    def add(self, key, value):
        self[key] = [value]

if __name__ == '__main__':

    scrappedData = datelazi().cazuri_pe_tara()
    scrappedIncidentaData = datelazi().incidenta_judet()
    scrappedGlobalData = trt_net().cazuri_global()


    dataGeneral = my_dictionary()
    for i in range(1, 6):
        dataGeneral.add(i, scrappedData[i - 1])

    dateIncidenta = my_dictionary()
    for i in range(1, 43):
        dateIncidenta.add(i, scrappedIncidentaData[i - 1])

    dateGlobal = my_dictionary()
    for i in range (1, 121):
        dateGlobal.add(i, scrappedGlobalData[i - 1])


    with open('C:\\Emil\\Proiecte\\JavaScript\\React Native\\Covid19\\data.json', 'w') as f:
        json.dump(dataGeneral, f)
    
    with open('C:\\Emil\\Proiecte\\JavaScript\\React Native\\Covid19\\dataLocal.json', 'w') as f:
        json.dump(dateIncidenta, f)
    
    with open('C:\\Emil\\Proiecte\\JavaScript\\React Native\\Covid19\\dataGlobal.json', 'w') as f:
        json.dump(dateGlobal, f)
 