import Card from "~/components/Card";
import clsx from "clsx";
import { theme } from "~/styles/theme.css.ts";
import { grid, header, day, title, weekday, container } from "~/components/Calendar/style.css.ts";
import dayjs from "dayjs";

export type CalendarProps = {
  date?: Date;
  [key: string]: any;
};

const Calendar = ({ date, className, ...intrinsic }: CalendarProps) => {
  return (
    <Card { ...intrinsic } className={ clsx(theme, container, className) }>
      <div className={ clsx(theme, header) }>
        <span className={ title }>{ dayjs(date).format("MMMM") }</span>
      </div>
      <div className={ clsx(theme, grid) }>
        {
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <span className={ weekday }>{ day }</span>
          ))
        }
        {
          Array.from({ length: dayjs(date).daysInMonth() }).map((_, i) => (
            <span className={ day }>{ i + 1 }</span>
          ))
        }
      </div>
    </Card>
  );
};

export default Calendar;