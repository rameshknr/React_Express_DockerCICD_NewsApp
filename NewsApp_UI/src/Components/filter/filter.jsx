import React, { useState, useEffect } from 'react';
import Card from '../card/FilterCard';
import {v4} from 'uuid';

const Filter = (props) => {
    const [news, setnews] = useState([]);
    const [country, setCountry] = useState('');
    const [category, setCategory] = useState('');
    const [sources, setsources] = useState('');
    const [searchTextData, setsearchTextData] = useState('');

    const searchNews =() =>{
        let apiString = 'https://newsapi.org/v2/top-headlines?'
        if(country!= ''){
            apiString = apiString+`country=${country}&`;
        }
        if(category!= ''){
            apiString = apiString+`category=${category}&`;
        }
        if(sources!= ''){
            apiString = apiString+`sources=${sources}&`;
        }
        if(searchTextData!= ''){
            apiString = apiString+`q=${searchTextData}&`;
        }
        apiString += `apikey=166d16dcc1a741b99692f315fa254960&page=1`;
        if(apiString.length>83){
            fetch(apiString)
                .then(res => res.json())
                .then(data => {
                    data.articles.map(item => {
                        item.source.id = v4();
                    }); 
                    setnews(data.articles);
            });
        }
        
    }
    const AddDetailDataFilter= (filterId) => {
        let readLater = {};
        news.map(item =>{
            if(item.source.id === filterId){
                readLater =  item;
            }
        } );
        alert(readLater.title);
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

    return (
         <div>
            <button id="NewsFilterData" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                News Filter Data
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">News Filter</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group col-md-8">
                        <input id="country" type="text" placeholder="Enter Country" className="form-control" onChange={(e) => setCountry(e.target.value)}  />
                    </div>
                    <div className="form-group col-md-8">
                        <input id="category" type="text" placeholder="Enter Category" className="form-control" onChange={(e) => setCategory(e.target.value)}  />
                    </div>
                    <div className="form-group col-md-8">
                        <input id="sources" type="text" placeholder="Enter sources" className="form-control" onChange={(e) => setsources(e.target.value)}  />
                    </div>
                    <div className="form-group col-md-8">
                        <input id="searchTextData" type="text" placeholder="Search Text" className="form-control" onChange={(e) => setsearchTextData(e.target.value)}  />
                    </div>
                </div>
                <div className="modal-footer">
                    <button id="searchNews" type="button" className="btn btn-primary" data-dismiss="modal" onClick={searchNews()} >Apply</button>
                </div>
                </div>
            </div>
            </div>
            <div className = "row md-8" >
                        {
                        news.map(item => 
                            <Card addDataFilter={AddDetailDataFilter} key={item.source.id} filterId={item.source.id} title={item.title} image={item.urlToImage} description={item.description} />
                        )
                    }
            </div>

        </div>
    )
}

export default Filter;