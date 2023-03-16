import PropTypes from 'prop-types';
import { useAppDispatch } from '../redux/reduxHooks';
import { toggleMission } from '../redux/missionsSlice';

const SingleMission = ({
  mission_name: mission,
  description,
  mission_id: id,
  reserved,
}) => {
  const dispatch = useAppDispatch();

  return (
    <article className="three-column">
      <h4 className="title-three">{mission}</h4>
      <p className="desc">{description}</p>
      <div className="btns-container">
        <span
          className={
            reserved
              ? 'mission-status active-mission'
              : 'mission-status inactive-mission'
          }
        >
          {reserved ? 'active member' : 'not a member'}
        </span>
        <button
          className={reserved ? 'btn btn-danger' : 'btn btn-neutral'}
          type="button"
          onClick={() => dispatch(toggleMission(id))}
        >
          {reserved ? 'Leave mission' : 'join mission'}
        </button>
      </div>
    </article>
  );
};
SingleMission.propTypes = {
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mission_id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default SingleMission;
