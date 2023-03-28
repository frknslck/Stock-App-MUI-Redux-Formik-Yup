import {Button, Grid} from "@mui/material"
import Typography from "@mui/material/Typography"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import useStockCall from "../hooks/useStockCall"
import BrandCard from "../components/cards/BrandCard"
import {flex} from "../styles/globalStyles"
import BrandModal from "../components/modals/BrandModal"

const Brands = () => {
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState({})
  const {brands} = useSelector((state) => state.stock)
  const {getStockData} = useStockCall()

  useEffect(() => {
    getStockData("brands")
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Typography variant='h4' color='error' mb={3}>
        Brands
      </Typography>
      <Button
        variant='contained'
        onClick={() => {
          setInfo({})
          setOpen(true)
        }}
      >
        New Brand
      </Button>
      <BrandModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {brands?.map((brand) => (
          <Grid item key={brand.id}>
            <BrandCard 
              brand={brand}
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

export default Brands
