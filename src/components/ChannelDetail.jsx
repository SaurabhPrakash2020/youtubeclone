import React from 'react'
import {useState,useEffect} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import {Box, useStepContext} from '@mui/material'
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail);
  console.log(videos);
  
  useEffect(() => {

    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        if (data && data.items && data.items.length > 0) {
          setChannelDetail(data.items[0]);
        } else {
          console.error("Invalid channel data structure:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching channel data:", error);
      });


    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        if (data && data.items) {
          setVideos(data.items);
        } else {
          console.error("Invalid videos data structure:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching videos data:", error);
      });
  }, [id]);
  
  return (
    <Box
      minHeight="95vh"
    >
      <Box>
        <div
          style={{background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%',
          zIndex:10,
          height:'300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display="flex" p="2">
          <Box sx={{mr:{sm:'100px'}}}/> <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail