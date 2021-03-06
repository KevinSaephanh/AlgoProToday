import axios from "axios";
import {
    GET_CHALLENGES,
    GET_CHALLENGE,
    CREATE_CHALLENGE,
    UPDATE_CHALLENGE,
    DELETE_CHALLENGE,
    CHALLENGE_ERROR
} from "./actionTypes";

export const getChallenges = () => {
    return async dispatch => {
        try {
            const res = await axios.get("/api/challenges");

            dispatch({
                type: GET_CHALLENGES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CHALLENGE_ERROR,
                payload: console.error(err)
            });
        }
    };
};

export const getChallenge = id => {
    return async dispatch => {
        try {
            const res = await axios.get(`/api/challenges/${id}`);

            dispatch({
                type: GET_CHALLENGE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CHALLENGE_ERROR,
                payload: console.error(err)
            });
        }
    };
};

export const createChallenge = challenge => {
    return async dispatch => {
        try {
            const res = await axios.post("/api/challenges", challenge);
            dispatch({ type: CREATE_CHALLENGE, payload: res.data });
        } catch (err) {
            dispatch({
                type: CHALLENGE_ERROR,
                payload: console.error(err)
            });
        }
    };
};

export const updateChallenge = id => {
    return async dispatch => {
        try {
            const res = await axios.post(`/api/challenges/${id}`);
            dispatch({
                type: UPDATE_CHALLENGE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CHALLENGE_ERROR,
                payload: console.error(err)
            });
        }
    };
};

export const deleteChallenge = id => {
    return async dispatch => {
        try {
            await axios.delete(`/api/challenges/${id}`);
            dispatch({
                type: DELETE_CHALLENGE,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: CHALLENGE_ERROR,
                payload: console.error(err)
            });
        }
    };
};

export const compile = async challenge => {
    try {
        const res = await axios.post(
            `/api/challenges/${challenge.id}/compile`,
            challenge
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
