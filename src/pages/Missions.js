import { useEffect } from 'react';
import SingleMission from '../components/SingleMission';
import { useAppDispatch, useAppSelctor } from '../redux/reduxHooks';
import { getMissions } from '../redux/missionsSlice';

const Missions = () => {
  const { missionList } = useAppSelctor((state) => state.missions);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

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
