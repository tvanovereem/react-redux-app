import React from 'react';
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

export default connect(mapStateToProps, mapDispatchToProps)(BossList);
