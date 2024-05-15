'use client'
import {DatePicker} from "@nextui-org/date-picker";
import {now, getLocalTimeZone, parseZonedDateTime, toZoned} from "@internationalized/date";
import {I18nProvider} from "@react-aria/i18n";


const ProjectStartDate = () => {
    
    const dateTime = now(getLocalTimeZone());
    const utcDateTime = toZoned(dateTime, 'UTC');

    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Project start date
            </p>
            <I18nProvider locale="en-GB">
                <DatePicker
                    isRequired
                    labelPlacement="outside"
                    variant="faded"
                    label="Date"
                    className="w-[278px] h-[43px] text-[#000]"
                    defaultValue={utcDateTime}
                    hourCycle={24}
                />
            </I18nProvider>
        </div>
    )
}

export default ProjectStartDate