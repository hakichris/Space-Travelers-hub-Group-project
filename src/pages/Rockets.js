import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getrocket } from '../redux/rocketsSlice';
import Rocket from '../components/SingleRocket';

const Rockets = () => {
  const RocketList = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getrocket());
  }, [dispatch]);

  return (
    <>
      {RocketList.rocket.map((r) => (
        <Rocket
          key={r.id}
          rocketName={r.rocketName}
          description={r.description}
          Image={r.Image}
          reserved={r.reserved}
        />
      ))}
    </>
  );
};

export default Rockets;
