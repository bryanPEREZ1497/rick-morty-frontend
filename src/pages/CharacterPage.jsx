import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import '../App.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CircleIcon from '@mui/icons-material/Circle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PlaceIcon from '@mui/icons-material/Place';
import TvIcon from '@mui/icons-material/Tv';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const status = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray'
}

export default function characterPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setcharacter] = useState({});
    const [episode, setepisode] = useState({});

    useEffect(() => {
        async function fetchCharacter() {
            let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            response = await response.json();
            setcharacter(response);
            const episodeUrl = response.episode[0];
            let episode = await fetch(episodeUrl);
            episode = await episode.json();
            setepisode(episode);
        }
        fetchCharacter();
    }, [])

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!character) {
        return <Navigate to="/list" />
    }

    return (
        <div className='container fadein'>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-2">
                    <Card sx={{ backgroundColor: '#0062cc', color:'white' }}>
                        <CardMedia
                            component="img"
                            // height="194"
                            image={character.image}
                            alt={character.name}
                        />
                        <CardContent>
                            <Typography variant="h5" style={{
                                display: 'inline-block',
                                // color: 'white'
                            }}>
                                {character.name}
                            </Typography>
                            <CircleIcon style={
                                {
                                    color: status[character.status],
                                    fontSize: 10,
                                    marginLeft: 9,
                                }
                            } />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 mt-2" >
                    <Card sx={{ backgroundColor: '#0062cc', color:'white',}}>
                        <CardContent>
                            <List sx={{ width: '100%' }}>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <AccountCircleIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={character.gender} secondary="Gender" />
                                        </ListItem>
                                    </div>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <BorderAllIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={character.species} secondary="Species" />
                                        </ListItem>
                                    </div>
                                </div>

                                <div className='row'>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <AirlineSeatIndividualSuiteIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={character.status} secondary="Status" />
                                        </ListItem>
                                    </div>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <BeachAccessIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={character.type || 'unknown'} secondary="Type" />
                                        </ListItem>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <HomeIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={character.origin?.name} secondary="Origin" />
                                        </ListItem>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <PlaceIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={character.location?.name} secondary="Last known location" />
                                        </ListItem>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <TvIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={`${episode?.name}-${episode?.episode}`} secondary="First seen in" />
                                        </ListItem>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <ListItem>
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={onNavigateBack}
                                            >
                                                Back
                                            </button>
                                        </ListItem>
                                    </div>
                                </div>
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div >
    )
}