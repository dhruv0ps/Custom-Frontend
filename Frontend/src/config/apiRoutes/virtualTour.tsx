import { axiosRequest } from '../apiConfig/axiosRequest';

import { apiUrl } from '../apiConfig/apiUrl';

const getAllVideos = async () => {
    return await axiosRequest.get<any>(apiUrl.virtualtour);
}

const getAllMake = async () => {
    return await axiosRequest.get<any>(apiUrl.make)
}

export const VideoApi = {
    getAllVideos,
    getAllMake
  
}