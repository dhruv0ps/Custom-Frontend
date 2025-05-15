import { axiosRequest } from '../apiConfig/axiosRequest';

import { apiUrl } from '../apiConfig/apiUrl';

const getAllVideos = async () => {
    return await axiosRequest.get<any>(apiUrl.virtualtour);
}

export const VideoApi = {
    getAllVideos
  
}