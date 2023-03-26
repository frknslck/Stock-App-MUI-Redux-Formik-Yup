import {fetchFail, getSuccess, fetchStart} from "../features/stockSlice"
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useStockCall = () => {
    const { axiosWithToken } = useAxios()
    const dispatch = useDispatch()

    const getStockData = async(url) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken(`stock/${url}/`)
            dispatch(getSuccess({data, url}))
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
      }

      const deleteStockData = async (url, id) => {
        dispatch(fetchStart())
        try {
          await axiosWithToken.delete(`stock/${url}/${id}/`)
          toastSuccessNotify(`${url} with id ${id} successfully deleted`)
          getStockData(url)
        } catch (error) {
          console.log(error)
          dispatch(fetchFail())
          toastErrorNotify(`${url} with id ${id} can not be deleted`)
        }
      }

      const postStockData = async(url, info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`stock/${url}/`, info)
            toastSuccessNotify(`${url} with name ${info?.name} successfully added`)
            getStockData(url)
        } catch (error) {
            console.log(error);
            toastSuccessNotify(`${url} with name ${info?.name} can not be added`)
            dispatch(fetchFail())
        }
      }

  return { getStockData, deleteStockData, postStockData }
  
}

export default useStockCall