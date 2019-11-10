import BG_COLOR from "../utils/BackgroundColors";
import { MainActionInterface } from "../utils/BaseTypes"

export interface SetColorInterface extends MainActionInterface {
    color: BG_COLOR
}

// Union interface
export type BackgroundActionTypes = SetColorInterface