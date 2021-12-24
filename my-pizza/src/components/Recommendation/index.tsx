import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Recommendation as RecommendationType } from '../../store/ducks/recommendation/types';
import { Container, ContainerPizza, PointsCTA, Obs } from './style';
import { Text, Price, Image, Buy, Group } from '../Pizza/styles';
import Button from '../Button';
import { saveOrder } from '../../store/ducks/order/action';

interface Props {
  pizza: RecommendationType;
}

const Recommendation = ({ pizza }: Props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { points, massa, ingredientes, image, price, title, tamanho } = pizza;

  const save = {
    dough: massa,
    flavor: title,
    size: tamanho,
    price: price,
    points: points,
    recommendation: true,
  };

  const orderRecommendation = () => {
    dispatch(saveOrder(save));
    navigate('order');
  };

  return (
    <>
      <Container>
        <h2>Pizza do dia:</h2>
        <ContainerPizza>
          <Image background={image} />
          <Text>
            <Group>
              <h3>{title}</h3>
            </Group>
            <ul>
              <li>
                <strong>Massa</strong>
                <div>{massa}</div>
              </li>
              <li>
                <strong>Ingredientes</strong>
                <div>{ingredientes}</div>
              </li>
            </ul>
            <Buy>
              <Price>
                R$ <strong>{price}</strong>
              </Price>
              <Button icon="✔" onClick={() => orderRecommendation()}>
                quero!
              </Button>
            </Buy>
          </Text>
        </ContainerPizza>
        <PointsCTA>
          <strong>{points}</strong>
          <span>pontos</span>
        </PointsCTA>
      </Container>
      <Obs>
        ganhe pontos ao concluir o seu pedido <span>*</span>
      </Obs>
    </>
  );
};

export default Recommendation;
