import { useAchievementServiceAchievementsControllerFindLast } from '../../../shared/api/queries';

export default function AchievementsPage() {
  const { data } = useAchievementServiceAchievementsControllerFindLast();

  console.log('+++', data);

  return (
    <section className="flex justify-center align-middle h-full">
      <h3>Achievements Page</h3>
      {data?.map(({ id, description, name, image }) => {
        return <p key={id}>{name}</p>;
      })}
    </section>
  );
}
