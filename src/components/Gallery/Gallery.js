import React from 'react';
import { Empty } from 'antd';
import { Fade } from 'react-reveal';
import filter from 'lodash/filter';
import Lightbox from 'react-lightbox-component';

import * as CONFIG from '../../config/config';

const Gallery = (props) => {
    if(props.list.length){
        let image_list = [];
        let currentList = props.list;
        let indexOfLastItem, indexOfFirstItem;

        if(props.currentPage){
            indexOfLastItem  = props.currentPage * CONFIG.META_ITEMS_PERPAGE;
            indexOfFirstItem = indexOfLastItem - CONFIG.META_ITEMS_PERPAGE;
            currentList      = props.list.slice(indexOfFirstItem, indexOfLastItem);
        }

        filter(currentList, function(each) {
            image_list.push({
                src : CONFIG.IMAGE_SIZE.ORIGINAL+each.file_path,
                title: ' ',
                description: ' ',
                thumbnail : CONFIG.IMAGE_SIZE.MEDIUM+each.file_path
            });
        });

        return (
            <Fade>
                <Lightbox
                    images={image_list}
                    thumbnailWidth='168px'
                    thumbnailHeight='auto'
                />
            </Fade>
        );
    }else
        return <Empty description={CONFIG.ERRORS.NOTHING_TO_SHOW}></Empty>;
}

export default Gallery