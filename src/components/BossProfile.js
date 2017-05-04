import React from 'react';
import { connect } from 'react-redux';

const BossProfile = ({ profile, zone }) =>
  <div id='boss-profile' className='col-md-6'>
    <h1>Profile</h1>
    {profile.name && <p>Name: {profile.name}</p>}
    {profile.description && <p>Description: {profile.description}</p>}
    {profile.level && <p>Level: {profile.level}</p>}
    {profile.health && <p>HP: {profile.health}</p>}
    {zone.name && <p>Location: {zone.name}</p>}
    {zone.location && <p>Region: {zone.location.name}</p>}
  </div>;

const mapStateToProps = ({ boss: { profile , zone} }) => ({
  profile,
  zone,
});
//{zone.location.name && <p>Region: {zone.location.name}</p>}
export default connect(mapStateToProps)(BossProfile);
