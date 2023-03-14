import SingleMission from '../components/SingleMission';
import { useAppSelctor } from '../redux/reduxHooks';

const Missions = () => {
  const { missionList } = useAppSelctor((state) => state.missions);
  return (
    <section className="section-container">
      <div className="three-column">
        <h3 className="title-three">Mission</h3>
        <h3 className="title-three">Description</h3>
        <h3 className="title-three">Status</h3>
      </div>
      {missionList.map((mission) => (
        <SingleMission
          key={mission.mission_id}
          mission_id={mission.mission_id}
          description={mission.description}
          mission_name={mission.mission_name}
          reserved={mission.reserved}
        />
      ))}
    </section>
  );
};
export default Missions;
