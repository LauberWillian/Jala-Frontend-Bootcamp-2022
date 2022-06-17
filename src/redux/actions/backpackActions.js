export const CREATE_BACKPACK = "CREATE_BACKPACK";

export const createBackpack = (backpack) => ({
  type: CREATE_BACKPACK,
  payload: { backpack },
});

export const DELETE_BACKPACK = "DELETE_BACKPACK";
