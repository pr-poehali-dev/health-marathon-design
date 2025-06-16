import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ProgressChart = () => {
  const weeklyData = [
    { day: "Пн", активность: 75, цель: 100 },
    { day: "Вт", активность: 85, цель: 100 },
    { day: "Ср", активность: 90, цель: 100 },
    { day: "Чт", активность: 70, цель: 100 },
    { day: "Пт", активность: 95, цель: 100 },
    { day: "Сб", активность: 100, цель: 100 },
    { day: "Вс", активность: 80, цель: 100 },
  ];

  const monthlyProgress = [
    { месяц: "Янв", очки: 420 },
    { месяц: "Фев", очки: 580 },
    { месяц: "Мар", очки: 720 },
    { месяц: "Апр", очки: 890 },
    { месяц: "Май", очки: 1020 },
    { месяц: "Июн", очки: 1200 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-montserrat text-academy-blue">
            Активность за неделю
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="активность" fill="#E53E3E" radius={[4, 4, 0, 0]} />
              <Bar dataKey="цель" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-montserrat text-academy-orange">
            Прогресс по месяцам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="месяц" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="очки"
                stroke="#FF8C00"
                strokeWidth={3}
                dot={{ fill: "#FF8C00", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressChart;
