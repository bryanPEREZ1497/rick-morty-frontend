
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
    return (
        <Card className='fadein hover' sx={{ maxWidth: 345, marginBottom: 4 }} >
            <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent sx={{
                        backgroundColor: "#0062cc",
                    }}>
                        <Typography gutterBottom variant="h7" component="div" color="white"
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
                        {/* <Typography variant="body2" color="white">
                            {character.species}
                        </Typography> */}
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

