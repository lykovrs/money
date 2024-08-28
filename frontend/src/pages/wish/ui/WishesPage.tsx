import { useWishesServiceWishesControllerFindTop } from '../../../shared/api/queries';

export default function () {
  const { data } = useWishesServiceWishesControllerFindTop();

  console.log('+++', data);

  return (
    <section className="flex justify-center align-middle h-full">
      <h3>Wishes Page</h3>
      {/* {data.map((wish) => {
        return <p key={wish.id}>{wish.title}</p>;
      }} */}
    </section>
  );
}
