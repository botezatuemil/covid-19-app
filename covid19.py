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


class mai_gov():
    def cazuri_judete(self):
        
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

        articles = []

        d = datetime.date.today()
        
        URL = 'https://www.mai.gov.ro/informare-covid-19-grupul-de-comunicare-strategica-' + str(d.day) + '-' + str(month[str(d.month)]) +'-ora-13-00/'

        source = requests.get(URL).text

        soup = BeautifulSoup(source, 'html.parser')

        for article in soup.find_all('td'):
            #print(article)
            try:

                city = article.text
                articles.append(city) 
            except:
                continue
        
        format_cazuri_judet(articles)
        #return articles


class datelazi():
    def cazuri_pe_tara(self):

        articles = []

        URL = 'https://datelazi.ro/'

        source = requests.get(URL).text

        soup = BeautifulSoup(source, 'html.parser')

        for article in soup.find_all('div', class_='column is-one-third'):
            try:
                numbers = article.h3.text

                print(numbers)
            except:
                continue





if __name__ == '__main__':
    # print(gsp().cazuri_totale())
    # print(mai_gov().cazuri_judete())
    # datelazi().cazuri_pe_tara()
    print(json.dumps(mai_gov().cazuri_judete()))
   
    #print(d.month, d.day)
    #print(datetime.)