import { useSelector } from 'react-redux';
import { useAppSelctor } from '../redux/reduxHooks';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocket);
  const rocketFiltered = rocketList.rocket.filter((rocket) => rocket.reserved === true);
  const { missionList } = useAppSelctor((state) => state.missions);
  const filteredList = missionList.filter(
    (mission) => mission.reserved === true,
  );
  return (
    <sectioon className="profilePage">

      <div>
        <h2 className="title"> My Rockects</h2>
        <table>
          <ul className="display">
            { rocketFiltered.length > 0 ? (
              rocketFiltered.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    <li key={rocket.id}>
                      <p>
                        {' '}
                        {rocket.rocketName}
                      </p>
                    </li>
                  </td>
                </tr>
              ))
            ) : (
              <li>
                <h3 className="title-three"> no booked rocket at the moments </h3>
              </li>
            )}
          </ul>
        </table>
      </div>
      <div>
        <h2 className="title-three"> My missions</h2>
        <ul className="display-items">
          {filteredList.length > 0 ? (
            filteredList.map((mision) => (
              <li className="Width" key={mision.mision_id}>
                <p>{mision.mission_name}</p>
              </li>
            ))
          ) : (
            <li>
              <h3 className="title-three">No missions at the moment</h3>
            </li>
          )}
        </ul>
      </div>
    </sectioon>
  );
};

export default Profile;
