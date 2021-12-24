import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { loadingPointsRequest } from '../../store/ducks/points/action';
// import Logo from '../../images/logo.png';
// import IconStoomPoints from '../../images/icon-stoom-points.png';
import { Container, Points, Text } from './styles';

const Header = () => {
  const dispatch = useDispatch();
  const { total, loading } = useSelector(
    (state: ApplicationState) => state.points
  );
  useEffect(() => {
    dispatch(loadingPointsRequest());
  }, [dispatch]);

  const localStoragePoints = Number(localStorage.getItem('stoomPoints'));
  const totalPoints = localStoragePoints !== 0 ? localStoragePoints : total;

  return (
    <Container>
      <img
        style={{ width: 130 }}
        src="https://crackberry.com/sites/crackberry.com/files/styles/larger/public/u84777/large_logo_480_0.png"
        alt=""
      />
      <Points>
        <img src="https://via.placeholder.com/70" alt="Stoom Points" />
        <Text>
          <strong>StoomPoints</strong>
          {!loading && (
            <strong>
              {' '}
              <span>{totalPoints}</span> pontos.
            </strong>
          )}
        </Text>
      </Points>
    </Container>
  );
};

export default Header;
