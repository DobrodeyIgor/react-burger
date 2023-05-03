import { ReactNode } from "react";
import { ThunkAction } from "redux-thunk";
import { ActionCreator, Dispatch } from "redux";
import { store } from "../store";
import { TUnionAction } from "../actions/interfaces";

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, never, TUnionAction>
>;

export type AppDispatch = Dispatch<TUnionAction>;

export type TIngredientType = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  id?: string;
};

export type TIngredientDetails = {
  image_large?: string;
  name?: string;
  calories?: number;
  proteins?: number;
  fat?: number;
  carbohydrates?: number;
};

export type TUser = {
  success: boolean;
  user: {
    name: string;
    email: string;
  };
};

export type TBurgerElement = {
  element: TIngredientType;
  deleteElement: (element: TIngredientType) => void;
  id: string | undefined;
  index: number;
};

export type TIngredientCard = {
  ingredient: TIngredientType;
};

export type TIngredientsSet = {
  type: string;
  title: string;
  refElement?: {
    current: any;
  };
};

export type TModalFunction = {
  children: ReactNode;
  onClose: () => void;
  onClick?: () => void;
  title?: string;
};

export type TModalOverlay = {
  onClose: () => void;
};

export type TPriceCount = {
  onClick: () => void;
};

export type TLocation = {
  background: TLocation;
  hash: string;
  key: string;
  pathname: string;
  search: string;
  from: string;
  state: {
    background?: {
      pathname: string;
      search: string;
      hash: string;
      key: string;
    };
  };
};
