import React, {useEffect} from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
// import UpgradeIcon from "@mui/icons-material/Upgrade";
// import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
// import useSortColumn from "../../hooks/useSortColumn";
// import { arrowStyle, btnHoverStyle } from "../../styles/globalStyle";
import {Typography} from "@mui/material"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import useStockCall from "../../hooks/useStockCall"
import {useSelector} from "react-redux"
import {btnStyle} from "../../styles/globalStyle"

const ProductsTable = () => {
  const {getStockData, deleteStockData, putStockData} =
    useStockCall()
  const {products} = useSelector((state) => state.stock)

  useEffect(() => {
    getStockData("products")
  }, [])

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table
          sx={{minWidth: 650}}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell align='right'>#</TableCell>
              <TableCell align='right'>Category</TableCell>
              <TableCell align='right'>Brand</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Stock</TableCell>
              <TableCell align='right'>Operation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product, index) => (
              <TableRow
                key={product.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell
                  component='th'
                  scope='product'
                  align='right'
                >
                  {index + 1}
                </TableCell>
                <TableCell align='right'>
                  {product.category}
                </TableCell>
                <TableCell align='right'>
                  {product.brand}
                </TableCell>
                <TableCell align='right'>
                  {product.name}
                </TableCell>
                <TableCell align='right'>
                  {product.stock}
                </TableCell>
                <TableCell
                  align='right'
                  sx={btnStyle}
                  onClick={() =>
                    deleteStockData("products", product.id)
                  }
                >
                  <DeleteOutlineIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ProductsTable
