import { writable } from "svelte/store";
import { allCharTypes } from "./utils/utils";

export const maxLength = writable(8);
export const selectedTypes = writable([...allCharTypes]);
