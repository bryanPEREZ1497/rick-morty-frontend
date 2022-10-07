
// import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
// import '../App.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { CardActionArea } from '@mui/material';

const status = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray'
}

export default function Character({ character }) {
    // console.log(character)
    return (
        // <div className='text-center p-5 fadein'>
        //     <div className='title' onClick={(e) => {
        //         navigator.clipboard.writeText(character.name)
        //     }}>
        //         <h2>{character.name}</h2>
        //     </div>

        //     <img className='img-fluid borderradius' src={character.image}
        //         alt={character.name} />

        //     <Link to={`/character/${character.id}`}>
        //         More...
        //     </Link>

        // </div>
        <Card className='fadein' sx={{ maxWidth: 345, margin: 4 }} >
            <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="200"
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent sx={{
                        backgroundColor: "#000000",
                    }}>
                        <Typography gutterBottom variant="h5" component="div" color="white"
                            onClick={(e) => {
                                navigator.clipboard.writeText(character.name)
                            }}>
                            {character.name} <CircleIcon style={
                                {
                                    color: status[character.status],
                                    fontSize: 10
                                }
                            } />
                        </Typography>
                        <Typography variant="body2" color="white">
                            {character.species}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            {/* <CardActions>
                <Button size="small">
                    <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
                        More
                    </Link>
                </Button>
            </CardActions> */}
        </Card>
    );
}

