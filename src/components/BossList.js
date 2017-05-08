import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentBoss,
  getBossProfile,
} from '../redux/boss/actions';

const BossList = ({ bosses, zone }) =>
  <div id='boss-list' className='col-md-12'>
    <h1>Bosses</h1>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Level</th>
          <th>Health</th>
          <th>Location</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
      {bosses.map((b,z) =>
        <tr 
          key={b.id}
        >
          <td
          key={b.name}
          >
            {b.name}
          </td>
          <td>
            {b.description}
          </td>
          <td>
            {b.level}
          </td>
          <td>
            {b.health}
          </td>
          <td>
            {z.name}
          </td>
          <td>
          </td>
        </tr>
      )}
      </tbody>
    </table>
  </div>;

const mapStateToProps = ({ bosses, zone }) => ({
  bosses,
  zone,
});


export default connect(mapStateToProps)(BossList);
