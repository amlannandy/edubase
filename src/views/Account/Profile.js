import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProfile } from '../../store/actions/profile';
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
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
