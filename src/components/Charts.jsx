import { Card, Title, LineChart } from "@tremor/react"
import { useSelector } from "react-redux"
import { Grid } from "@mui/material"

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock)

  const salesData = sales?.map((item) => ({
    date: item.createds,
    sales: Number(item.price_total),
  }))

  const purchasesData = purchases?.map((item) => ({
    date: item.createds,
    purchases: Number(item.price_total),
  }))

  return (
    <Grid container justifyContent="center" spacing={2} mt={3}>
      <Grid item xs={12} sm={12} md={6}>
        <Card>
          <Title>Total Sales</Title>
          <LineChart
            data={salesData}
            dataKey="date"
            index="date"
            categories={["sales"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ p: 2 }}>
          <Title>Total Purchases</Title>
          <LineChart
            data={purchasesData}
            dataKey="date"
            index="date"
            categories={["purchases"]}
            colors={["red"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  )
}
export default Charts
