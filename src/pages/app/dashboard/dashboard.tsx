import { Helmet } from 'react-helmet-async'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthCancledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { RevenueChart } from './revenue-char'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCancledOrdersAmountCard />
        </div>

        <div className='grid grid-cols-9 gap-4'>
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
