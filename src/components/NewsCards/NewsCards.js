import React from 'react'
import { Grid,Grow,Typography } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard';
import useStyles from "./styles"


const infoCards=[
    {color:'#35A29F',
    title:'Latest News',
    text:"Show me the latest news"
    },
    {
        color:'#0B666A',
        title:"News by categories",
        info:"Business,Entertainment,General,Health,Science,Sports,Technology",
        text:"Give me the latest technology news",
    },
];
const NewsCards=({articles,activeArticle})=> {
  const classes=useStyles()
   if(!articles.length){
      return(
        // <Grow in>
        //   <Grid className={classes.containers}
        //   container
        //   alignItems="stretch"
        //   spacing={3}
        //   >
        //     {
        //     infoCards.map((infoCard)=>(
        //       <Grid item
        //       xs={12}
        //       sm={6}
        //       md={4}
        //       lg={3}
        //       className={classes.infoCard}
        //       >
        //         <div className={classes.card} style={{backgroundColor:infoCard.color,marginLeft:"50px",marginRight:"40px"}}>
        //           <Typography variant="h5" component="h5">{infoCard.title}</Typography>
        //             {infoCard.info? (
        //               <Typography variant="h6" component="h6">
        //                 {/* <strong>{infoCard.title}</strong>:<br/> */}
        //                 {infoCard.info}
        //               </Typography>
        //             ):null}
        //             <Typography variant="h6" component="h6">
        //               Try saying: <br/> <i>{infoCard.text}</i>
        //             </Typography>
                  
        //            </div>
        //         </Grid>
        //     ))
        //     }
        //     </Grid>
        // </Grow>


        <div className={classes.container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',width:'100vw' }}>
  <Grow in>
    <Grid container alignItems="stretch" spacing={3}>
      {articles.map((article, i) => (
        <Grid item key={i} sm={6} md={4} lg={3} style={{ display: "flex" }}>
          <NewsCard activeArticle={activeArticle} i={i} article={article} />
        </Grid>
      ))}
    </Grid>
  </Grow>
  <Grow in>
    <Grid container alignItems="stretch" spacing={3}>
      {infoCards.map((infoCard) => (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
          <div className={classes.card} style={{ backgroundColor: infoCard.color}}>
            <Typography variant="h5" component="h5">{infoCard.title}</Typography>
            {infoCard.info ? (
              <Typography variant="h6" component="h6">
                {infoCard.info}
              </Typography>
            ) : null}
            <Typography variant="h6" component="h6">
              Try saying: <br /> <i>{infoCard.text}</i>
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  </Grow>
</div>


      )
  }


  return(
     <Grow in>
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {articles.map((article,i)=>(
        <Grid item key={i} sm={6} md={4} lg={3} style={{display:"flex"}}>
          <NewsCard activeArticle={activeArticle} i={i} article={article}/>
    </Grid>
      ))}
      </Grid>
  </Grow>
  );
    

  
}

export default NewsCards
