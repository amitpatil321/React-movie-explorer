import React from 'react';
import { Empty, Comment, Icon, Tooltip, Avatar, } from 'antd';
import ShowMoreText from 'react-show-more-text';
import * as CONFIG from '../../config/config';

const Reviews = (props) => {
    if(props.list.length){
        return props.list.map(review => {
            return (
                <React.Fragment key={review.id}>
                    <Comment
                        author={review.author}
                        avatar={(
                            <Avatar
                            src={"https://www.themoviedb.org/u/"+review.author}
                            alt={review.author}
                            />
                        )}
                        content={(
                            <ShowMoreText
                                lines={3}
                                more='Read more'
                                less='Read less'
                            >
                                {review.content}
                            </ShowMoreText>                             
                        )}
                    />                    
                </React.Fragment>
            )
        });
    }else
        return (<Empty description={ CONFIG.ERRORS.NOTHING_TO_SHOW } />);
};

export default Reviews;