import React, { useState, useEffect } from "react";

import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import styled from "styled-components";
import { Star, StarOutlined, StarBorder } from '@material-ui/icons';
import StarRatings from 'react-star-ratings';
// import Rating from 'react-simple-star-rating';

const Reviews = () => {
    const [ review, setReview ] = useState("");
    const [ star, setStar ] = useState(0);

    const setStarFunc = (rate) => {
        setStar(rate);
    };

    useEffect(() => {
        console.log(star);
    }, [star]);

    return(
        <StyledCenterDiv>
            <div>
                <h4>Your opinion matters to us.</h4>
            </div>
            <div>
                <StyledInputContainer>
                    <CustomInput
                        labelText="Review"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        // value={users.name ? users.name : ""}
                        // defaultValue={users && users.name}
                        // onChange={(e) =>
                        //   setUsers({ ...users, name: e.target.value })
                        // }
                    />
                </StyledInputContainer>
                <StarRatingContainer>
                    <StarRatings
                        rating={star}
                        starRatedColor="#ffcd3c"
                        changeRating={setStar}
                        starEmptyColor="#ddd"
                        starHoverColor="#ffcd3c"
                        numberOfStars={5}
                        name='rating'
                        />
                </StarRatingContainer>
                <Button color="info">Submit</Button>
            </div>
        </StyledCenterDiv>
    );
};

export default Reviews;

const StyledCenterDiv = styled.div`
    text-align: center;
    margin: auto;
`;

const StyledInputContainer = styled.div`
    width: 75%;
    margin: auto;
`;

const StyledStarBorder = styled(StarBorder)`
    :hover{
        color: #ffcd3c;
    }
`;

const StarRatingContainer = styled.div`
    margin: 24px auto;
`;