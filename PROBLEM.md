### **Assignment 4 – NewsAPI_Upload Service**

This service is responsible for uploading news article and store it in database.

- The NewsAPI_Upload has 4 endpoints
    - AddNews: `/api/uploadnews/addnews` – Store the news article in database uploaded by user.
    - GetNewsByUserName: `/api/uploadnews/getnewsbyusername` – Retrieves the news article uploaded by user from the database.
        - Required Parameters
            - username – Username of the logged in user.
    - GetUploadedNews: `/api/uploadnews/getuploadednews` – Retrieves all news articles uploaded by users from database.
    - RemoveNews: `/api/uploadednews/removenews` – Delete news article uploaded by user from the database.
        - Required Parameters
            - username – Username of logged in user
            - articleID – ArticleId of the selected news article to delete.
