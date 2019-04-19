import React from 'react';

const Photos = (props) => {
    if(props.list.length){
        let image_list = [];
        filter(props.list, function(each) {
            image_list.push({ 
                src : CONFIG.IMAGE_SIZE.MEDIUM+each.file_path,
                title: ' ',
                description: ' '
            });
        });

        return (
            <Fade>    
                <Lightbox 
                    images={image_list}
                    thumbnailWidth='250px'
                    thumbnailHeight='auto'
                />
            </Fade>    
        );
    }else
        return <Empty description={CONFIG.ERRORS.NOTHING_TO_SHOW}></Empty>;
}