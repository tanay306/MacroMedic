import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from 'utils/api';
import { useParams } from 'react-router-dom';

const ReviewCmp = ({ comment, date, star }) => {
    return (
        <div>
            <StyledFlexRow>
                <div>
                    {comment}
                </div>
                <div>
                    <div>{date}</div>
                    <div>{star}</div>
                </div>
            </StyledFlexRow>
        </div>
    );
};

const DoctorProfile = () => {
    const { id } = useParams();
    const [ docData, setDocData ] = useState();

    const fetchDocData = async () => {
        const data = await api.getUserById(id);
        setDocData(data);
        console.log(data);
    };

    useEffect(() => {
        fetchDocData();
    }, []);

    return (
        <div>
            {docData && (<div>
                <StyledFlexRow>
                    <div>
                        <h1>{docData.name}</h1>
                        <h3>{docData.specialization}</h3>
                    </div>
                    <div>
                        <img src={`http://localhost:5000${docData.image}`} alt="..."  width={300}/>
                    </div>
                </StyledFlexRow>
                {docData.reviews.map(elem => (
                    <div>
                        <ReviewCmp comment={elem.comment} date={elem.date} star={elem.rating}/>
                    </div>
                ))}
            </div>)}
        </div>
    );
};

export default DoctorProfile;

const StyledFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto 24px;
`;