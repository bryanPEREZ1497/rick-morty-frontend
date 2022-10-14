import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

import '../App.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
        <div className='container fadein' style={{
            color: 'white',
        }}>

            <div className="row mt-5">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="img-fluid borderradius"
                        style={{
                            display: 'block',
                            marginBottom: '20px'
                        }}
                    />
                    <h3 style={{
                        display: 'inline-block',
                    }}>{character.name}
                    </h3>
                    <CircleIcon style={
                        {
                            color: status[character.status],
                            fontSize: 10,
                            marginLeft: 9,
                        }
                    } />
                </div>

                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                    {/* <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}> */}
                    <List sx={{ width: '100%', maxWidth: 360, }}>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={character.gender} secondary="Gender" />
                                </ListItem>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
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
                                            <BeachAccessIcon />
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
                                            <BeachAccessIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={character.origin?.name} secondary="Origin" />
                                </ListItem>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <BeachAccessIcon />
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
                                            <BeachAccessIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${episode?.name}-${episode?.episode}`} secondary="First seen in" />
                                </ListItem>
                            </div>
                        </div>
                    </List>
                    {/* </Grid>
                    </Box> */}

                    <button
                        className="btn btn-outline-primary mt-3"
                        onClick={onNavigateBack}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div >
    )
}