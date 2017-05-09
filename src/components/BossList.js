import React from 'react';
import { connect } from 'react-redux';
import {
  getBossesZone,
} from '../redux/bosses/actions';
import {
  setCurrentBoss,
  getBossProfile,
  getBossZone,
} from '../redux/boss/actions';

const BossList = ({ bosses , getZone, zone}) => 
  <div id='boss-list' className='col-md-12'>
    <h1>Bosses</h1>
    <input id='search-bar' type='text' />
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Level</th>
          <th>Health</th>
          <th>Location(ID)</th>
        </tr>
      </thead>
      <tbody>
      {bosses.map((b, z) =>
        
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
            {b.zoneId}
          </td>
        </tr>
      )}
      </tbody>
    </table>
  </div>;

const mapStateToProps = ({ bosses, boss: {zone} }) => ({
  bosses,
  zone,
});

const mapDispatchToProps = dispatch => ({
  setBoss(id) {
    return () => {
      dispatch(setCurrentBoss(id));
      dispatch(getBossProfile(id));
    };
  },
  getZone(id) {
    return () => {
      dispatch(getBossZone(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BossList);


/*import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentBoss,
  getBossProfile,
} from '../redux/boss/actions';

const BossList = ({ bosses, setBoss }) =>
  <div id='boss-list' className='col-md-6'>
    <h1>Bosses</h1>
    <input type="text" />
    <ul>
      {bosses.map((b, i) =>
        <li
          onClick={setBoss(b.id)}
          key={b.name}
        >
          {b.name}
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ bosses }) => ({
  bosses,
});

const mapDispatchToProps = dispatch => ({
  setBoss(id) {
    return () => {
      dispatch(setCurrentBoss(id));
      dispatch(getBossProfile(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BossList);*/