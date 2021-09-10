export const TOGGLE_SHOWMY_EMAIL = "TOGGLE_SHOWMY_EMAIL";
export const CHANGE_NAME = "CHANGE_NAME";

export const toggleShowMyEmail = {
  type: TOGGLE_SHOWMY_EMAIL
}

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  payload: newName,
});