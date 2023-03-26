import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import {
  flexColumn,
  modalStyle,
} from "../../styles/globalStyles"
import {Button, TextField} from "@mui/material"
import useStockCall from "../../hooks/useStockCall"

export default function BrandAdd({
  open,
  setOpen,
  info,
  setInfo,
}) {
  const {postStockData} = useStockCall()

  const handleSubmit = (e) => {
    e.preventDefault()
    postStockData("brands", info)
    setOpen(false)
    setInfo({})
  }

  console.log(info)

  const handleChange = (e) => {
    const {name, value} = e.target
    setInfo({...info, [name]: value})
  }

  return (
    <div>
      <Modal 
        open={open} 
        onClose={() => {
          setOpen(false);
          setInfo({})}}
      >
        <Box sx={modalStyle}>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={flexColumn}
          >
            <TextField
              label='Brand Name'
              name='name'
              id='name'
              type='text'
              variant='outlined'
              required
              value={info?.name || ""}
              onChange={handleChange}
            />

            <TextField
              label='Image'
              name='image'
              id='image'
              type='url'
              required
              variant='outlined'
              value={info?.image || ""}
              onChange={handleChange}
            />
            <Button
              type='submit'
              variant='contained'
              size='large'
            >
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
