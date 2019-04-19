import React, { useState } from 'react';
import { Empty, Modal } from 'antd';
import { Fade } from 'react-reveal';
import filter from 'lodash/filter';
import Lightbox from 'react-lightbox-component';
import ReactPlayer from 'react-player'

import * as CONFIG from '../../config/config';

import './Videos.css'

const Videos = (props) => {
    const [visible, _showModal]   = useState(false);
    const [videoId, _setVideoId]  = useState();
    const [isPlaying, _setPlaying] = useState(false);

    const _playVideo = (index) => {
        _showModal(true); // Show modal
        _setVideoId(props.list[index].key); // Set video id
        _setPlaying(true); // play video
    }

    const _closeVideo = () => {
        _showModal(false); // hide modal
        _setPlaying(false); // pause video
        setTimeout(() => {
            _setVideoId(null); // Unset video id after some delay, for smooth animation of modal
        }, 500);
    }

    if(props.list.length){
        let videos = [];
        
        filter(props.list, function(video) {
            videos.push({ 
                src : "https://img.youtube.com/vi/"+video.key+"/0.jpg"
            });
        });

        return (
            <>
                visible : {(visible) ? "true" : "false"}<br/>
                playing : {(isPlaying) ? "true" : "false"}<br/>
                Id : {videoId}
                <Fade>
                    <Lightbox 
                        images={videos}
                        thumbnailWidth='250px'
                        thumbnailHeight='auto'
                        renderImageFunc={(idx, image, toggleLightbox, width, height) => {
                            return (
                            <img
                                key={idx}
                                src={image.src}
                                className='lightbox-img-thumbnail'
                                style={{width: width, height: height}}
                                onClick={() => {
                                        _playVideo(idx)
                                    }
                                } />
                            )
                        }}                    
                    />
                </Fade>
                <Modal
                    wrapClassName="videoPlayer"
                    title="&nbsp;"
                    visible      = {visible}
                    footer       = {null}
                    centered
                    maskClosable = {false}
                    onCancel     = {() => _closeVideo()}
                >
                    {(videoId) ? 
                        <ReactPlayer 
                            url      = {'https: //www.youtube.com/watch?v='+videoId} 
                            playing  = {isPlaying} 
                            controls = {true}
                            width    = {700}
                            height   = {400}
                        />
                    : '' }    
                </Modal>                
            </>    
        );
    }else
        return <Empty description={CONFIG.ERRORS.NOTHING_TO_SHOW}></Empty>;
}

export default Videos