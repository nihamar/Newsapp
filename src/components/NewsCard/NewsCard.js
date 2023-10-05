import React, { createRef, useEffect, useState } from 'react'
import{
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    Button,
    Typography,
    CardMedia,
} from "@mui/material";
import useStyles from "./styles";
import { act } from 'react-dom/test-utils';
import { classNames } from '@emotion/react';

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},activeArticle,i}) => {
    const classes=useStyles()
    const [elRefs,setElRefs]=useState([]);
    const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop-50)

    useEffect(()=>{
        window.scroll(0,0);
        setElRefs((refs)=>Array(20).fill().map((_,j)=>refs[j] || createRef()))
    },[])

    useEffect(()=>{
        if(i===activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle])
        }
    },[i,activeArticle,elRefs])
  return (
  <Card ref={elRefs[i]} className={activeArticle=== i ? classes.activeCard:classes.card}>
    <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} 
        image={urlToImage||
             "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
             }
              title={title}/>
        <div className={classes.details}>
            <Typography variant="body2" color="GrayText" component="h2">
                {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variant="body2" color="GrayText" component="h2">
                {source.name}
            </Typography>
        </div>
        <Typography className={classes.title}gutterBottom variant="h5" component="h2">
            {title}
        </Typography>
        <CardContent>
            <Typography variant="body2" component="p">
                {description}
                </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions  className={classes.CardActions}>
        <button size="small" color="primary" href={url}>Learn More</button>
        <Typography variant="h5" component="h2">{i+1}</Typography>
    </CardActions>
  </Card>
  
)}

export default NewsCard

