import dayjs from 'dayjs';
import { useAchievementServiceAchievementsControllerFindLast } from '../../../shared/api/queries';
import { Timeline, TimelineEntry } from '../../../shared/ui/Timeline';

export default function AchievementsPage() {
  const { data: acheivements } =
    useAchievementServiceAchievementsControllerFindLast();

  const data: TimelineEntry[] =
    acheivements?.map(({ description, name, createdAt }) => {
      return {
        title: `${dayjs(createdAt).format('MM-DD-YYYY')}`,
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {name}
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-4"></div>
          </div>
        ),
      };
    }) || [];

  console.log('+++', data);

  return (
    <section className="pt-20">
      <Timeline data={data} />
    </section>
  );
}
