import React, { useState, useEffect } from 'react';
import Card from '../card/NoReadLater';

const ReadNow = () => {
        const [news, setnews] = useState([]);
        useEffect(() => {
            fetch('http://localhost:8009/api/v1/news',{
                method: 'GET' 
            }).then(res => res.json())
            .then(data => { 
                setnews(data);
             });
        }, []);
 
        return(
            <div className="container mt-3">
                <div className="row">
                            {
                                news.map(item => 
                                    <Card key={item.newsId} id={item.newsId} title={item.newsheading} image={item.newsImage} description={item.newsdescription} />
                                )
                            }
                    
                </div>
            </div>
        );
}

export default ReadNow;