import { useAppSelctor } from '../redux/reduxHooks';

const Profile = () => {
  const { missionList } = useAppSelctor((state) => state.missions);
  const filteredList = missionList.filter(
    (mission) => mission.reserved === true
  );
  return (
    <sectioon className="section-container two-column">
      <h2 className="title-three"> My Rockects</h2>
      <h2 className="title-three"> My missions</h2>
      <ul className="display-items">No Rockects to display</ul>
      <ul className="display-items">
        {filteredList.length > 0 ? (
          filteredList.map((mision) => (
            <li key={mision.mision_id}>
              <p>{mision.mission_name}</p>
            </li>
          ))
        ) : (
          <li>
            <h3 className="title-three">No missions at the moment</h3>
          </li>
        )}
      </ul>
    </sectioon>
  );
};
export default Profile;
