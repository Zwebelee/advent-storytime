import {isStoryAvailable} from "@/utils/isStoryAvailable.ts";
import {Card} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";

interface Story {
    id: number;
    day: number;
    date: string;
    title: string;
    src: string;
    subtitle?: string;
}

interface AdventAudioItemProps {
    story: Story
}

export const AdventAudioItem = ({story}: AdventAudioItemProps) => {
    const available = isStoryAvailable(story.date);

    return (
        <Card className="flex flex-col items-center gap-2 p-4 bg-[#ffffe6]">
            {available ? (
                <div className={"flex flex-col w-full gap-2 items-center"}>
                    <div className={"flex flex-row gap-2"}>
                        {story.id !== 0 && story.id !== 25 && <Label>{story.day} </Label>}
                        <Label>{story.title}</Label>
                    </div>
                    <Label className={"font-light"}>{story.subtitle}</Label>
                    <audio controls className={"flex w-full"}>
                        <source src={story.src} type="audio/mp3"/>
                    </audio>
                </div>
            ) : (
                <Label className="text-gray-400">Öffnet sich ab dem {story.day}. Dezember</Label>
            )}
        </Card>
    );
}