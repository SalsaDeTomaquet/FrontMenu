import instance from "./api";

// READ
export const getEvent = async () => await instance.get('event/');

export const getEventById = async (id) => await instance.get(`event/${id}`);

// CREATE

export const createEvent = async (event) => await instance.post('event/', event);

