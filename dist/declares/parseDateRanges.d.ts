import {Moment} from "moment"

export type DateRange = {
  start: Moment
  end: Moment
}

export declare function parseDateRanges(string): DateRange[]
export declare function isDateInDateRanges(date: string | Date | Moment, dateRanges: string): boolean
