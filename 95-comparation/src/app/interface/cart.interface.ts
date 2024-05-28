import productInterface from './product.iterface';

interface cartInterface extends productInterface {
  quantity: number;
}

export default cartInterface;
