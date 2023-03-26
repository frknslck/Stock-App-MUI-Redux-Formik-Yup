import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import Typography from "@mui/material/Typography"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import {btnStyle, flex} from "../../styles/globalStyles"
import useStockCall from "../../hooks/useStockCall"

export default function FirmCard({brand}) {
  const {deleteStockData} = useStockCall()

  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          {brand?.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {brand?.address}
        </Typography>
      </CardContent>
      <CardMedia
        image={brand?.image}
        sx={{
          p: 1,
          objectFit: "contain",
          height: "130px",
          my: "1.5rem",
        }}
        component='img'
        alt='brand-img'
      />

      <Typography variant='body2' color='text.secondary'>
        Phone: {brand?.phone}
      </Typography>
      <CardActions sx={flex}>
        <EditIcon sx={btnStyle} />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("brands", brand.id)}
        />
      </CardActions>
    </Card>
  )
}
