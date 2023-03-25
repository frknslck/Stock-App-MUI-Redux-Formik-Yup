import { Button, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"
import FirmCard from "../components/FirmCard"
import { flex } from "../styles/globalStyles"
import FirmAdd  from "../components/FirmAdd"

const Firms = () => {
  const [toggle, setToggle] = useState(false)
  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)

  useEffect(() => {
    getStockData("firms")
  }, [])

  const handleNewFirm = () => {
    setToggle(!toggle)
  }
  
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>Firm</Typography>
      <Button variant="contained" onClick={handleNewFirm}> New Firm </Button>
      {toggle && <FirmAdd sx={{display: "absolute", backdropFilter: "blur(5px)"}}/>}
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Firms