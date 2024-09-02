// import { useNavigate } from 'react-router-dom';
import { useWishesServiceWishesControllerFindTop } from '../../../shared/api/queries';

export default function () {
  const { data } = useWishesServiceWishesControllerFindTop();
  // const navigate = useNavigate();
  // console.log('+++', data);

  // const handleAddWish = () => {
  //   navigate('add');
  // };

  return (
    <section className="">
      <h3>Wishes Page</h3>
      {/* {data.map((wish) => {
        return <p key={wish.id}>{wish.title}</p>;
      }} */}
      <div>
        <p>Top 5 Wishes:</p>
        {data?.map((wish) => {
          return <p key={wish.id}>{wish.name}</p>;
        })}
      </div>
      {/* <Button onClick={handleAddWish}>Add wish</Button> */}
    </section>
  );
}
