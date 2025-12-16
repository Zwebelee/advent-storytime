import stories  from "@/data/stories.json"
import {AdventAudioItem} from "@/components/AdventAudioItem.tsx";

export const AdventAudioList = () => {
    return (
        <div className="flex flex-col gap-4 w-full overflow-auto flex-1">
            {stories.map((story: any) => (
                <AdventAudioItem key={story.index} story={story} />
            ))}
        </div>
    );
};