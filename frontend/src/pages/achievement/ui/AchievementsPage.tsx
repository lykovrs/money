import { useAchievementServiceAchievementsControllerFindLast } from '../../../shared/api/queries';

export default function AchievementsPage() {
  const { data } = useAchievementServiceAchievementsControllerFindLast();

  console.log('+++', data);

  return (
    <section className="flex justify-center align-middle h-full">
      <h3>Achievements Page</h3>
      {/* {data.map((wish) => {
        return <p key={wish.id}>{wish.title}</p>;
      }} */}
    </section>
  );
}
