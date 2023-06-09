import * as React from "react"
import {useState} from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import {btnStyle, flex} from "../../styles/globalStyle"
import useStockCall from "../../hooks/useStockCall"

export default function FirmCard({firm, setOpen, setInfo}) {
  const {deleteStockData} = useStockCall()

  const handleEditModal = () => {
    setOpen(true)
    setInfo({
      id: firm.id,
      name: firm.name,
      phone: firm.phone,
      address: firm.address,
      image: firm.image,
    })
  }

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
          {firm?.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        image={firm?.image}
        sx={{
          p: 1,
          objectFit: "contain",
          height: "130px",
          my: "1.5rem",
        }}
        component='img'
        alt='firm-img'
      />

      <Typography variant='body2' color='text.secondary'>
        Phone: {firm?.phone}
      </Typography>
      <CardActions sx={flex}>
        <EditIcon sx={btnStyle} onClick={handleEditModal} />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("firms", firm.id)}
        />
      </CardActions>
    </Card>
  )
}
