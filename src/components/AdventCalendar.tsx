import {AdventAudioList} from "@/components/AdventAudioList.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";


export default function AdventCalendar() {
    return (
        <Card className={"flex flex-col items-center border-0 p-4 bg-transparent h-[90vh]"}>
            <div className={"flex flex-col w-full gap-2 items-center"}>
                <Label className={"text-4xl font-bold text-center text-[#ffffcc]"}>
                    24 achtsame Adventsgeschichten
                </Label>
                <Label className={"text-xl font-semibold text-[#ffffcc]"}>
                    Erzählt von Lea
                </Label>
            </div>
            <AdventAudioList/>
        </Card>
    );
}