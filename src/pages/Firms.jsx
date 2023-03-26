import {Button, Grid} from "@mui/material"
import Typography from "@mui/material/Typography"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import useStockCall from "../hooks/useStockCall"
import FirmCard from "../components/Cards/FirmCard"
import {flex} from "../styles/globalStyles"
import FirmModal from "../components/Modals/FirmModal"

const Firms = () => {
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState({})
  const {firms} = useSelector((state) => state.stock)
  const {getStockData} = useStockCall()

  useEffect(() => {
    getStockData("firms")
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Typography variant='h4' color='error' mb={3}>
        Firm
      </Typography>
      <Button
        variant='contained'
        onClick={() => {
          setInfo({})
          setOpen(true)
        }}
      >
        New Firm
      </Button>
      <FirmModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}/>
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard 
              firm={firm} 
              open={open}
              setOpen={setOpen}
              info={info}
              setInfo={setInfo}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Firms
