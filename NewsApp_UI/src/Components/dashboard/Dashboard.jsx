import React, { useState, useEffect } from 'react';
import {v4} from 'uuid';
import Card from '../card/Card';
import Filter from '../filter/filter'


const Dashboard = (props) =>{

    const [news, setnews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8008/trending/in',{
            method: 'GET',
            headers:{
            'Content-Type' : 'application/json'            }
            })
            .then(res => res.json())
            .then(data => {
                data.articles.map(item => {
                    item.source.id = v4();
                }); 
                return setnews(data.articles);
         });
    }, []);

    const AddDetailData= (id) => {
        let readLater = {};
        news.map(item =>{
            if(item.source.id === id){
                readLater =  item;
            }
        } );
        fetch('http://localhost:8009/api/v1/news', {
            method: 'POST',
            body: JSON.stringify({
                source:{
                    id: readLater.source.id,
                    name: readLater.source.name
                },
                author:readLater.author,
                title: readLater.title,
                content: readLater.content,
                urlToImage: readLater.urlToImage,
                description: readLater.description,
                url: readLater.url
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    return(
        <div data-testid="content" className="container mt-3">
            <div className="row mb-3">
                <Filter/>
            </div>
            <div className="row">
                <div className="row"><h1>Trending News In INDIA</h1></div>
                <div className="row"> 
                    {
                        news.map(item => 
                            <Card addData={AddDetailData} key={item.source.id} id={item.source.id} title={item.title} image={item.urlToImage} description={item.description} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
