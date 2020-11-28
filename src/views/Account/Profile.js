import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

import { fetchProfile } from '../../store/actions/profile';
import PocketData from '../../components/Account/PocketData';
import EmptyProfile from '../../components/Account/EmptyProfile';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

const Profile = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.auth);
  const { isLoading, profile } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [dispatch, userId]);

  if (isLoading) {
    return <LoadingSpinner message='Fetching your profile...' />;
  }

  if (!isLoading && !profile) {
    return <EmptyProfile />;
  }

  return (
    <div className='mx-3 my-4'>
      <Row className='align-items-center'>
        <Col md={10}>
          <h3>Your Profile</h3>
        </Col>
        <Button variant='outline-warning'>Edit Profile</Button>
      </Row>
      <hr />
      <PocketData upperText='Name' lowerText={profile.name} />
      <PocketData upperText='Position' lowerText={profile.position} />
      <PocketData upperText='Branch' lowerText={profile.branch} />
      <PocketData upperText='Age' lowerText={profile.age + ' years'} />
      <PocketData upperText='Phone Number' lowerText={profile.phone} />
    </div>
  );
};

export default Profile;
